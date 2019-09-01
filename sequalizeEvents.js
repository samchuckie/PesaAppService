const commons = require('./common')
const Sequelize = require('sequelize');
const sequelize = commons.sequelize

const event = sequelize.define('featured', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      primaryKey: true

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

  const createEventsTable = () =>{
    event.sync({ force: true }).then((result) => {
      insertdata()
    }).catch((err) => {
      console.log(err)
    });
  }  

 const insertdata = ()=>{
  event.create({
    title: "Tinga Tinga Tales The Musical 2018",
    host: "Tinga Rain Limited",
    photo : "Tinag-Tinga-Tales-870x550.jpg",
    start_date: "2019-09-09",
    location: "Kenya National Theatre (KNT)",
    description : "The most beloved animated television series is now a magnificent stage musical! The theatrical play that sold out multiple events in 2017 is back with more shows, exciting cast and a captivating show!",
    time_from : "06.30",
    time_to : "08.30",
    early_price : 500,
    advance_price: 1500,
    close_date : "2019-07-29",
    close_time : "11.59"
  });
  event.create({
    title: "AidEx Nairobi Conference 2019",
    host: "Aidex",
    photo : "https---cdn.evbuc.com-images-63121076-147067665436-1-original.jpg",
    start_date: "2019-09-19",
    location: "Hilton Hotel Conference Room 5",
    description : "AidEx Nairobi, launched in 2014, is a two-day high-profile conference attracting over 500 Aid & Development professionals from East Africa and beyond.The 2019 conference theme will tackle: The importance of inclusiveness to regional progress ",
    time_from : "12.30",
    time_to : "19.30",
    early_price : 100,
    advance_price: 300,
    close_date : "2019-08-09",
    close_time : "11.59"
  });
  event.create({
    title: "Certified Cyber-Threat Intelligence Professional Training",
    host: "AITREC Professional Training ",
    photo : "hacking.jpg",
    start_date: "2019-09-12",
    location: "Israel embassy Hall 5B",
    description : "Program participants will get a Certified Cyber Threat Intelligence Professional (CTIP) certificate after completion of the program.Training Fee: The training fee of 45,000 Ksh is inclusive of training facilitation, training material, CTIP ",
    time_from : "09.00",
    time_to : "18.30",
    early_price : 45000,
    advance_price: 50000,
    close_date : "2019-08-05",
    close_time : "11.59"
  });
  



 }

 const getFeatured = (resp)=>{
   event.findAll().then(users => {
   console.log("All users:", JSON.stringify(users))
   resp.send(JSON.stringify(users))
  });
 }



 module.exports = {
   featured:getFeatured,
   createEventsTable:createEventsTable
 }
 