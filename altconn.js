'use strict';
const colors          = require('colors');
const mysql           = require('mysql');
const q               = require('q');
const common = require('./common')

const MySQLConnection = {};

MySQLConnection.connect = function(){
    const d = q.defer(); 
    MySQLConnection.connection = mysql.createConnection({
        user                : 'root',
        password            : 'password',
        database            : common.databasename
    });

    MySQLConnection.connection.connect(function (err) {
        if(err) {
            console.log('Not connected '.red, err.toString().red, ' RETRYING...'.blue);
            d.reject();
        } else {
            console.log('Connected to Mysql. Exporting..'.blue);
            d.resolve(MySQLConnection.connection);
        }
    });
    return d.promise;
};

module.exports = MySQLConnection;