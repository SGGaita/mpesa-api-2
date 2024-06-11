const express = require("express");

var cors = require('cors')
var app = express()
require("dotenv").config();
const port = process.env.PORT || 5000

//app configurations
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//adding middleware - cors
app.use(cors());

//route.
const mpesa = require('./routes/index');
 //listening to a specific route
app.use('/', mpesa);


app.get('/', (req, res) => {
    res.send('Hello test!')
  })


app.listen(port, ()=>{
    console.log(`Server app is running at localhost:${port}`)
})