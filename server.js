


const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const User = require('../Model/user.js')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Mern-APP')

app.post('/',  async(req, res) => {

console.log(req.body)    

try{

     await User.Create({

        userName : req.body.userName,
     

    })
    res.json({status : 'ok'})


} catch (err){

    res.json({status : 'error found', error : 'Email already existed'})

}



})

app.listen (3000, () => {

console.log('Server Started on 3000')

})