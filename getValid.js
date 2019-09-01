// const common = require('./common')
// const connection =  require('./connection')
// const getconn = connection.databaseconnection
// const get_users = "SELECT * FROM validation WHERE phone = ? AND password = ? "
// const arr1 = [
//     ["122345"]
// ]
// const arr2 = [
//     [703318241]
// ]
// getconn.connect(err =>{
//     if(err) throw err
//     getconn.query(get_users,[arr2,arr1] ,  (err,result)=>{
//         // getconn.query(get_users ,  (err,result)=>{

//         if (err) throw err
//         console.log("Fetched item")
//         console.log(result)
//         if (result.length<1){
//             console.log("User doesnt exist")
//         }
//         else{
//             console.log("User exist just fine")

//         }
//     })
// })