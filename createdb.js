//Handle if exist error later
// const create_db_query = `CREATE DATABASE IF NOT EXISTS ${common.databasename} `
const common = require('./common')
const connection =  require('./connection')
const art = require('./sequalizeArt')
const sequalizeEvent = require('./sequalizeEvents')
const sequalizeGaming = require('./sequalizeGaming')
const sequalizeFavourite = require('./sequalizeFavourite')
const create_db_query = `CREATE DATABASE ${common.databasename} `
const myConnection = connection.connection;
const createtable =require('./createtable')
console.log(create_db_query)
myConnection.connect(err =>{
    if (err){
        console.log("Could not make connection");
        throw err
    }
    console.log("Successful in making a connection");
    myConnection.query( create_db_query ,  (err,results) =>{
       if (err) throw err;
       art.createartsTable()
       sequalizeEvent.createEventsTable();
       createtable.creatable();
       sequalizeGaming.creategamingsTable();
       sequalizeFavourite.createFavoriteTable();
       console.log("Database created");
    });
});