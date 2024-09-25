const { use } = require("../routes")

const users = [
    {id: '1', name: "Gleisson", email: 'gleisson@TextDecoderStream.com', password: '123456', role: 'admin'},
]

module.exports = {
    findAll: () => users,

    findById: (id) => users.find(user => user.id === id),

    findByEmail: (email) => users.find(user => user.email === email),

    registerUser: (name, email, password) => {
        const userAlreadyRegitered = users.find(user => user.email === email)

        if(userAlreadyRegitered) return null

        const newUser = {
            id: Math.floor(Math.random() * 9999999).toString(),
            name,
            email,
            password,
            role: 'standard'
        }

        users.push(newUser)
        return newUser
    },

    createUser: (name, email, password) => {
        const userAlreadyRegitered = users.find(user => user.email === email)

        if(userAlreadyRegitered) return null

        const newUser = {
            id: Math.floor(Math.random() * 9999999).toString(),
            name,
            email,
            password,
            role
        }

        users.push(newUser)
        return newUser
    },

    deleteUser: (id) => {
        const userIndex = users.findIndex(user => user.id === id)

        if(userIndex === -1) return null

        const [deletedUser] = users.splice(userIndex, 1)

        return deletedUser
    }
}