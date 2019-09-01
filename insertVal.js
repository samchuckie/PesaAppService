// const common = require('./common')
// const connection =  require('./connection')
// const insertconn = connection.databaseconnection
// const insert_user = `INSERT INTO validation (email,phone,password) VALUES ?`

// const send = x =>{
//     console.log(x)
//     let {email ,phone,password} = x
//     let arr = [
//         [email,phone,password]
//     ]
//     insertconn.connect(err=>{
//         if(err) throw err; 
//         insertconn.query(insert_user,[arr] ,(err,result)=>{
//             if (err) throw err
//             console.log("Successful entry into database")
//             console.log(result)
//         })
//     })
// }

// module.exports = {
//     send:send
// }