const express=require('express')
const appControllers=require('../controllers/appControllers')
const endPoints = require('../utility/endPoints')
const router=express.Router()
router.get('/',appControllers.home)
router.post('/signin',appControllers.signin)
module.exports=router