//connect business logic
// const router = require("express").Router();
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

const router = require('express').Router()


router.post('/register',userCtrl.register)

router.post('/login',userCtrl.login)

router.get('/logout',userCtrl.logout)

router.get('/refresh_token',userCtrl.refreshtoken)

router.get('/info',auth, userCtrl.getUser)

// router.patch("/addcart", auth, userCtrl.addCart);


 

module.exports = router