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

  const art = sequelize.define('Art', {
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

  const createartsTable = () =>{
    art.sync({ force: true }).then((result) => {
      insertdata()
    }).catch((err) => {
      console.log(err)
    });
  }

 const insertdata = ()=>{
  art.create({
    title: "Encounters @ The Terrace Vol. 9 (Spring Edition)",
    host: "Red Fox efx",
    photo : "https---cdn.evbuc.com-images-67228945-255939381820-1-original.jpg",
    start_date: "2019-08-31",
    location: "Kellico Complex",
    description : "Come and enjoy a relaxed Saturday afternoon listening to the stylings of the Gentlemen of Soul DJ's as you enjoy the great pricing on food and drink in the company of some of the city's ",
    time_from : "15.30",
    time_to : "22.30",
    early_price : 10500,
    advance_price: 15000,
    close_date : "2019-09-19",
    close_time : "11:59"
  });
  art.create({
    title: "Our Kenyan Love Story",
    host: "Wordbenda ",
    photo : "https---cdn.evbuc.com-images-67127109-103035320609-1-original.jpg",
    start_date: "2019-09-1",
    location: "Alchemist bar",
    description : "#OurKenyanLoveStory is a celebration of love concert happening in Nairobi on 1st September ‘19. My fiancé and I, together with a very talented lineup of artists, will be sharing our love stories and experiences with you",
    time_from : "16.00",
    time_to : "19.00",
    early_price : 1194,
    advance_price: 1500,
    close_date : "2019-08-25",
    close_time : "11.59"
  });
  art.create({
    title: "Karaoke Night",
    host: "Ki.chen",
    photo : "https---cdn.evbuc.com-images-69249577-280917750972-1-original.jpg",
    start_date: "2019-09-23",
    location: "Ki.chen Rooftop",
    description : "Eat, drink and sing along to your favourite jams this and every Friday from 7.00pm at the Ki.chen Rooftop.",
    time_from : "07.00",
    time_to : "12.30",
    early_price : 45,
    advance_price: 100,
    close_date : "2019-08-22",
    close_time : "11.59"
  });
  
 }

 const getArty= (resp)=>{
   art.findAll().then(users => {
   console.log("All users:", JSON.stringify(users))
   resp.send(JSON.stringify(users))
  });
 }
const search = (resp,searching)=>{
    const Op = Sequelize.Op
    art.findAll(
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
   getArty:getArty,
   search:search,
   createartsTable:createartsTable,
 }