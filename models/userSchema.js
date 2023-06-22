const mongoose = require('mongoose')
 let user = new mongoose.Schema({
    name : {
        type:String,
        require,
    },
    email : {
        type:String,
        require,
    },
    password : {
        type:String,
        require,
    },
    mobile : {
        type:Number,
        require,
    }
 })

 module.exports=mongoose.model('User',user)