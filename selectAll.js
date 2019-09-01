const commons = require('./common')
const Sequelize = require('sequelize');
const sequelize = commons.sequelize

const all = sequelize.define('All', {
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

 
 const getALL = (resp)=>{
   sequelize.query(`select * from arts union select * from gamings union select * from featureds`, {
    model: all,
    mapToModel: true
   }).then(users => {
   console.log("All users:", JSON.stringify(users))
   resp.send(JSON.stringify(users))
  });
 }

 module.exports = {
   getALL:getALL,
  
 }