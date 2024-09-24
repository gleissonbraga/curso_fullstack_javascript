const express = require('express')
const authMiddleware = require('../middleware/auth_middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
  const username = req.authenticatedUser.username
  res.json({ message: `Você está na área protegida. Bem-vindo(a), ${username}!` })
})

module.exports = protectedRouter