const commons = require('./common')
const Sequelize = require('sequelize');
const sequelize = commons.sequelize

const empty = {}
const validation = sequelize.define("validation",{
    email: {
        type: Sequelize.STRING,
        allowNull: false   
     },
     phone: {
        type: Sequelize.DECIMAL,
        allowNull: false   ,
        primaryKey: true
     },
     password: {
        type: Sequelize.STRING,
        allowNull: false   
     }
})

const createvalidationTable = () =>{
    validation.sync({ 
        force: true 
    })
  }
  const insertvalid = (query,resp) =>{
      validation.create(query).then(users =>{
          resp.status(200)
          resp.json(empty)
           
      }).catch(err =>{
          console.log("Unique record already exists")
            resp.status(650)
            resp.json(empty)
      
          
      })
  }
  const getvalid = (query,resp) =>{
      validation.findAll({
        where : query
    }).then(users =>{
        const empty = {}
        if(users.length>0){
          resp.status(200)
          resp.json(empty)
        }
        else{
          resp.status(640)
          resp.json(empty)
    
        }    
      })
  }
  

  module.exports = {
    createvalidationTable:createvalidationTable,
    insertvalid:insertvalid,
    getvalid:getvalid
  }