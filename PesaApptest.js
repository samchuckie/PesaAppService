const express = require('express')
const commons = require('./common')
const path = require("path");
const insertVal =  require('./insertVal')
// const getValid = require('./getValid')
const altselect = require('./altselect')
const sequalizeEvent = require('./sequalizeEvents')
const art = require('./sequalizeArt')
const sequalizeGaming = require('./sequalizeGaming')
const app = express()
const port = 8080
app.use("/public" , express.static(path.join(__dirname)));


//TODO CALL RETURN TO END THE TASK WHEN CALLED AT ONCE
app.get("/loadImages/:path",(req,res)=>{
	res.sendFile(path.join(__dirname,"images",req.params.path));
});

app.get("/valid"  ,(req,resp)=>{
    // console.log(req.query)
    altselect.conn(req.query,resp)
    // .then(bool =>{
    //     console.log( "Bool is " + bool)
    //     // if(bool===true){
    //     //     resp.status(203);
    //     //     console.log("bools is true")
    //     // }
    //     // else{
    //     //     console.log("bools is false")
    //     //     resp.status(600)
    //     // }
    // })
    
    // resp.json(example)
})
app.post("/valid" , (req,resp)=>{
    altselect.insert(req.query ,resp)
})
app.get("/featured" ,(req,resp) =>{
    sequalizeEvent.featured(resp);
})
app.get("/search/:searchParam" , (req,resp)=>{
    const searching = req.params.searchParam
    sequalizeEvent.search(resp,searching)
})
app.get("/category/:category", (req,resp) =>{
    const category =  req.params.category
    switch(category){
        case "Art":
            console.log("Art")
            art.getArty(resp)
            break;
        case "Music":
            console.log("Music")
            break;
        case "Gaming":
            console.log("Gaming")
            sequalizeGaming.gamingy(resp)
            break;
            
    }

})

app.listen(port, () => console.log(`App is listening on port ${port}!`))
