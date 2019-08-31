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


const favourite = sequelize.define('favourite', {
    phone: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        primaryKey: true
      },
      
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    host: {
      type: Sequelize.STRING,
      allowNull:false,

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

const createFavoriteTable = () =>{
    favourite.sync({ force: true })
  }

  const insertdata = (x)=>{
      favourite.create(x)
  }

  const search = (resp ,phone) => {
    favourite.findAll({
      where: {
        phone:phone
      }
    }).then(users =>{
      if(users.length>0){
        resp.status(200)
        resp.send(JSON.stringify(users))
      }
      else{
        const empty = {}
        resp.status(640)
        resp.json(empty)
  
      }    })

  }
module.exports = {
    createFavoriteTable:createFavoriteTable,
    insertdata:insertdata,
    search:search
}
