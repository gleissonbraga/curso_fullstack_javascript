const express = require("express")
const authController = require("./controllers/authController")
const welcomeController = require("./controllers/welcomeController")
const { optionalAuth, ensureAuth, ensureAdmin } = require("./middlewares/auth-middleware")
const usersController = require("./controllers/users-controller")

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.get('/welcome', optionalAuth, welcomeController.welcome)
router.get('/users', ensureAuth, ensureAdmin, usersController.index)
router.get('/users/:id', ensureAuth, ensureAdmin, usersController.show)
router.post('/users', ensureAuth, ensureAdmin, usersController.save)
router.post('/users/:id', ensureAuth, ensureAdmin, usersController.delete)

module.exports = router