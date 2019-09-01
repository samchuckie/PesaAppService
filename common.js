// const databasename = "AppPesa"
const databasename = "test"
const validationtable = "validation"
const phone = "phone"
const email ="email"
const password = "password"
const id = "id"
const duplicate_entry = "ER_DUP_ENTRY"
const Sequelize = require('sequelize')

// const sequelize = new Sequelize(`${commons.databasename}`, 'root', 'password', {
//   host: 'localhost',
//   dialect: 'mysql' ,
//   pool: {
//     max: 100,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

// const sequelize = new Sequelize(`${databasename}`, 'roots', 'password', {
//     host: 'localhost',
//     dialect: 'postgres' ,
//     pool: {
//       max: 100,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres' 
    });

module.exports = {
    databasename :databasename,
    sequelize:sequelize,
    validationtable : validationtable,
    email:email,
    password:password,
    phone:phone,
    id:id,
    duplicate_entry:duplicate_entry

}