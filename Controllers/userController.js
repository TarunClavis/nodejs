const user = require('../models/userSchema')
const signUp = async (req,res)=>{
  console.log(req.body)
  let data=await user.create(req.body)
  res.send(data)
}
const getInfo = async (req,res)=>{
    console.log("getInfo")
} 



module.exports = {
    signUp,
    getInfo
}