const Sequelize = require('sequelize');
const commons = require('./common')


const sequelize = new Sequelize(`${commons.databasename}`, 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql' ,
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

  const gaming = sequelize.define('Gaming', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    host: {
      type: Sequelize.STRING,
      allowNull:false
    },
    photo: {
      type: Sequelize.STRING,
      allowNull:false
    },
    start_date: {
        type: Sequelize.STRING,
        allowNull:false
      },
    location: {
        type: Sequelize.STRING,
        allowNull:false
      },
    description: {
        type: Sequelize.STRING,
        allowNull:false
      },
    time_from: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    time_to: {
        type: Sequelize.STRING,
        allowNull:false
      },
    early_price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
    advance_price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
    close_date: {
        type: Sequelize.STRING,
        allowNull:false
      },
    close_time: {
        type: Sequelize.STRING,
        allowNull:false
      }
  });

  const creategamingsTable = () =>{
    gaming.sync({ force: true }).then((result) => {
      insertdata()
    }).catch((err) => {
      console.log(err)
    });
  }

 const insertdata = ()=>{
  gaming.create({
    title: "Family Fun Day: 90's Games",
    host: "Phanice Shamalla",
    photo : "https---cdn.evbuc.com-images-69231913-89620032371-1-original.jpg",
    start_date: "2019-10-27",
    location: "Carnivore Kenya",
    description : "The '90s was an amazing time!We had so many fun, addictive games to play. Real, outdoor games like Kati and Babli Gan( supposedly its bubble gum). Wouldn't it be fun to introduce you kids to the fun games you played",
    time_from : "17.00",
    time_to : "18.00",
    early_price : 385,
    advance_price: 500,
    close_date : "2019-10-10",
    close_time : "11.59"
  });
  gaming.create({
    title: "Game Night",
    host: "Mile Square Church",
    photo : "https---cdn.evbuc.com-images-67003465-250270618314-1-original.jpg",
    start_date: "2019-08-23",
    location: "Hoboken Game Lounge",
    description : "Hoboken Game Lounge is one of the newest Hoboken establishments. Located on the west side of town, it's home to an assortment of fun things to do ranging from a curated selection of board games to virtual golf simulators. Join us for a night of fun!",
    time_from : "19.00",
    time_to : "12.00",
    early_price : 2500,
    advance_price: 3500,
    close_date : "2019-08-20",
    close_time : "11.59"
  });
  gaming.create({
    title: "Bubble Soccer Pickup Game",
    host: " Bubble Ball Soccer NYC",
    photo : "https---cdn.evbuc.com-images-63513152-24162644774-1-original.jpg",
    start_date: "2019-09-23",
    location: "Mclaughlin Park",
    description : "Bump, bounce, roll, and most importantly, laugh in this 50 minute pick up game of Bubble Soccer. No large crew necessary (but feel to bring your squad if you are so inclined). Book one or more tickets and get ready to have the time of your life ",
    time_from : "14.50",
    time_to : "21.50",
    early_price : 5500,
    advance_price: 10000,
    close_date : "2019-08-22",
    close_time : "11.59"
  });
  
 }

 const getgamingy= (resp)=>{
   gaming.findAll().then(users => {
   console.log("All users:", JSON.stringify(users))
   resp.send(JSON.stringify(users))
  });
 }
const search = (resp,searching)=>{
    const Op = Sequelize.Op
    gaming.findAll(
      {
        where: {
          title: {
            [Op.substring]:`${searching}`
          }
        }
      }
    ).then(users => {
    if(users.length>0){
      resp.status(200)
      resp.send(JSON.stringify(users))
    }
    else{
      const empty = {}
      resp.status(640)
      resp.json(empty)

    }
  })
}

 module.exports = {
   gamingy:getgamingy,
   search:search,
   creategamingsTable:creategamingsTable,
 }