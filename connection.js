const sql = require('mysql')
const common = require('./common')
const connection = sql.createConnection({
    user: "root",
    password: "password"
})
const databaseconnection = sql.createConnection({
    user: "root",
    password: "password",
    database: common.databasename
})


module.exports = {
    connection:connection,
    databaseconnection:databaseconnection
}