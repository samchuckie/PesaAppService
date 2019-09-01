const commons = require('./common')
const Sequelize = require('sequelize');
const sequelize = commons.sequelize

const all = sequelize.define('all', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true

    },
    host: {
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey: true
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
  } 
  
  // ,
//   {
//     freezeTableName: true
// }


);

const createALL = ()=>{
  sequelize.query(`create table if not exists alls as (select * from arts union select * from gamings union select * from featureds)`, {
   model: all,
   mapToModel: true
  })
}

 const getALL= (resp)=>{
  all.findAll().then(users => {
  resp.send(JSON.stringify(users))
 });
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Op = Sequelize.Op
const first = (searching) =>{
  return all.findAll(
    {
      where: {
        title: {
          [Op.startsWith]: capitalize(searching)
        }
      }
    }
  )
}

const search = (resp,searching)=>{
 first(searching).then(users => {
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
   getALL:getALL,
   search:search ,
   createALL:createALL,
   first:first
 }