const Sequelize = require('sequelize');
const commons = require('./common')


const sequelize = new Sequelize(`${commons.databasename}`, 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql' ,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const person =  sequelize.define('Users' ,{
  phone: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    primaryKey: true
  },title: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})
const createpersonTable = () =>{
  person.sync({ force: true }).then((result) => {
    insertdata()
  }).catch((err) => {
    console.log(err)
  });
}
const insertdata = ()=>{
  person.create({
    phone:703318241,
    title:"Tinga Tinga Tales The Musical 2018 par 3",
    desc:"The most beloved animated television series is now a magnificent stage musical! The theatrical play that sold out multiple events in 2017 is back with more shows, exciting cast and a captivating show!"
  })
  // person.create({
  //   phone:703318241,
  //   title:"Tinga Tinga Tales The Musical 2018",
  //   desc:"The most beloved animated television series is now a magnificent stage musical! The theatrical play that sold out multiple events in 2017 is back with more shows, exciting cast and a captivating show!"
  // })
}
insertdata()