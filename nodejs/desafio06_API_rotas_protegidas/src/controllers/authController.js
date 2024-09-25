const users = require('../models/users')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/environment')

module.exports = {

    // POST /auth/register
    register: (req, res) => {
        const { name, email, password } = req.body

        if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Invalid fields!' })
        }

        const registeredUser = users.registerUser(name, email, password)

        if(!registeredUser) {
            res.status(400).json({ message: 'Email already in use!'})
        }

        // registeredUser.password = undefined // utilizado para esconder a senha no thunder client

        res.status(201).json(registeredUser)
    },

    // POST /auth/register
    login: (req, res) => {
        const { email, password } = req.body

        if(typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ message: 'Invalid fields!' })
        }

        const user = users.findByEmail(email)

        if(!user) return res.status(404).json({message: 'User not found'})

        if(user.password !== password) {
            return res.status(400).json({ message: 'Email or password is incorrect'})
        }

        const payload = { id: user.id, email: user.email}
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d'})

        res.json({ token })
    }
}



// register: (req, res) => {

// }