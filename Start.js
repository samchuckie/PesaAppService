const art = require('./sequalizeArt')
const sequalizeEvent = require('./sequalizeEvents')
const sequalizeGaming = require('./sequalizeGaming')
const selectAll = require('./selectAll')
const express = require('express')
const path = require("path");
const createtable = require('./createtable')
const createdb =  require('./createdb')
const sequalizeFavourite = require('./sequalizeFavourite')
const app = express()
const port = process.env.PORT || 3000

app.use("/public" , express.static(path.join(__dirname)));
app.get("/loadImages/:path",(req,res)=>{
	res.sendFile(path.join(__dirname,"images",req.params.path));
});

app.get("/valid"  ,(req,resp)=>{
    createtable.getvalid(req.query,resp);
})
app.post("/valid" , (req,resp)=>{
    createtable.insertvalid(req.query,resp);
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
            art.getArty(resp)
            break;
        case "Gaming":
            console.log("Gaming")
            sequalizeGaming.gamingy(resp)
            break;  
    }
})
app.get("/getall" ,(req,resp)=>{
    selectAll.getALL(resp)
})
app.get("/favorite" ,(req,resp)=>{
    console.log("Get for favourite")
    sequalizeFavourite.search(resp,req.query.phone)

})
app.post("/favorite" ,(req,resp)=>{
    console.log("Post for favourite");
    console.log(req.query)
    sequalizeFavourite.insertdata(req.query)
    resp.status(660)
    resp.json(empty)
    
})
app.get("/createall" ,(req,resp)=>{
    createdb.initialization(resp);
})
app.listen(port, () => console.log(`App is listening on port ${port}!`))

// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });