const express = require("express")
const authController = require("./controllers/authController")
const welcomeController = require("./controllers/welcomeController")
const { optionalAuth } = require("./middlewares/auth-middleware")

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.get('/welcome', optionalAuth, welcomeController.welcome)

module.exports = router