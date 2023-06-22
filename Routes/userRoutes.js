const { signUp, getInfo } = require('../Controllers/userController')
const express = require('express')

let router = express.Router();

router.post('/signup', signUp)

router.get('/login', getInfo)


module.exports= router