const colors= require('colors')
const mysqlCon = require('./altconn')
const q = require('q')
const commons = require('./common')
const get_users = "SELECT * FROM validation WHERE phone = ? AND password = ? "
const insert_user = `INSERT INTO validation (email,phone,password) VALUES ?`

const mypromise = q.defer()
const empty = {}
const conn = (query,resp) => {
        const meep =mysqlCon.connect().then(con =>{
        //    console.log('connected!');
        let {phone,password} = query
        console.log(phone)
        console.log(password)
        mysql = con;
        const passwordarr = [[password]]
        const phonearr = [[phone]]
        mysql.query(get_users,[phonearr,passwordarr] , (err,result)=>{
            if (err) throw err
            // console.log(result.length)

            if (result.length<1){
                console.log("User doesnt exist")
                bool =false
                mypromise.resolve("false")
                resp.status(600);
                resp.json(empty)
            }
            else{
                console.log("User exist just fine")
                bool = true
                mypromise.resolve("true")
                resp.status(200);
                resp.json(empty)
            }
        })
    });
    return mypromise.promise
}
const insert = (query,resp) =>{ 
    const meep =mysqlCon.connect().then(con =>{
        console.log(query)
        mysql = con;

        let {phone,password,email} = query
        let arr = [
            [email,phone,password]
        ]
        mysql.query(insert_user,[arr] ,(err,result)=>{
            if (err){
                console.log(err)
                resp.status(650);
                 resp.json(empty)
                //  throw err
            }
            else{
                console.log("Successful entry into database")
                // console.log(result)
                // if (result.length<1){
                //     console.log("User doesnt exist")
                //     bool =false
                //     mypromise.resolve("false")
                //     resp.status(600);
                //     resp.json(empty)
                // }
                // else{
                //     console.log("User exist just fine")
                //     bool = true
                //     mypromise.resolve("true")
                    resp.status(200);
                    resp.json(empty)
                // }
            }
            })
        })
}

module.exports = {
    conn:conn,
    insert:insert
}

// mysqlAPI.reconnect = function(){
//     mysqlCon.connect().then(function(con){
//       console.log("connected. getting new reference");
//         mysql = con;
//         mysql.on('error', function (err, result) {
//             mysqlAPI.reconnect();
//         });
//     }, function (error) {
//       console.log("try again");
//         setTimeout(mysqlAPI.reconnect, 2000);
//     });
// };