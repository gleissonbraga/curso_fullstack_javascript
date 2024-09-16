const express = require('express')
const gamesController = require('./controllers/gamesController')
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!'})
})

// mostrando os itens do array
app.get('/games', gamesController.index)

// buscando os games por id
app.get('/games/:id', gamesController.show)

// criando novos games
app.post('/games', gamesController.save)

// adicionando novo genre
app.post('/games/:id/genre', gamesController.addGenre)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})