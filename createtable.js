const common = require('./common')
const connection =  require('./connection')
//Store passwords in safer,secure format
//Describe table to change its structure later
const create_user_details = `CREATE TABLE ${common.validationtable} (${common.email} VARCHAR(255), ${common.phone} DECIMAL(60) PRIMARY KEY, ${common.password} VARCHAR(255))`
const creatable = () =>{
    const dbaccess = connection.databaseconnection
dbaccess.connect(err =>{
    if(err) throw err
    dbaccess.query(create_user_details , (err,results)=>{
        if(err) throw err
        console.log("Successful table creation")
        // return err
    })
})
}
module.exports = {
    create_user_details:create_user_details,
    creatable:creatable
}
