// const common = require('./common')
// const q = require('q');
// const connection =  require('./connection')
// //Store passwords in safer,secure format
// //Describe table to change its structure later
// const select_All = `select * from arts union select * from gamings union select * from featureds`
// // const select_All = `select * (select * from arts union select * from gamings) as b where b.title in (select * from favourites)`
// const dbaccess = connection.databaseconnection
// const handshake =  ()=> {dbaccess.connect()}
// const nodeify =  q.denodeify(handshake)

// const selectall = (resp) => {
// //     dbaccess.connect(err =>{
// //     if(err) throw err
// //     dbaccess.query(select_All , (err,results)=>{
// //         if(err) throw err
// //         console.log(results)
// //         resp.send(results)
// //         // return err
// //     })
// // })

// }
// module.exports = {
//     sall:selectall
// }
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