const commons = require('./common')
const Sequelize = require('sequelize');
const sequelize = commons.sequelize
const selectAll = require('./selectAll')

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

  const insertdata = (resp,query)=>{
    // Alternative we can use transactions

    
    const {title,phone} = query
    selectAll.first (title).then(users =>{
      const search =JSON.stringify(users);
      const result = JSON.parse(search)[0]
      result.phone = phone
      console.log(result)
      favourite.create(result).then(user => {
        console.log("Successful favourite")
        resp.status(200)
        resp.json({})
      }).catch(err => {
        console.log(err)
        resp.status(650)
        resp.json({})
      })
    })
    
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
  
      }    
    })

  }
module.exports = {
    createFavoriteTable:createFavoriteTable,
    insertdata:insertdata,
    search:search
}
