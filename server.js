const express = require('express')
const { dirname } = require('path')
const path = require('path')
const app = express()
const port = 3000
const fs= require("fs");

const db =require("./appDB.js")

const bodyParser = require('body-parser')
const { default: dbsend } = require('./appDB')

app.use(bodyParser.urlencoded({extended: true}));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

app.post('/',function(req,res){
 
 var num1= String(req.body.name1);

res.send("The typed name is " + num1);
db. dbsend(num1);

})


app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})