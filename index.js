const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const http = require('http')
require("dotenv").config();
const server = http.createServer(app);
app.use(cors())
app.use(express.json())

const userRoute = require('./Routes/userRoutes')


const port=process.env.PORT 
console.log(port)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Security-Policy-Report-Only', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'")
    next();
});

mongoose.connect(process.env.URL).then(()=>{
    console.log("data base connected")
})

app.use('/auth',userRoute)

// app.get('/', (req,res)=>{
//     res.send('<h1>welcome to In node js</h1>')
// })
server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})