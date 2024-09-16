const express = require('express')
const gamesController = require('./controllers/gamesController')
const app = express()

// faz a conversão do recebimento de dados recebidos em json
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

// realizando update do game {nome e ano}
app.put('/games/:id', gamesController.update)

// adicionando novo genre
app.post('/games/:id/genre', gamesController.addGenre)

// Deletando um game
app.delete('/games/:id', gamesController.delete)

// deletando atraves do genre
app.delete('/games/:id/genre/:name', gamesController.removeGenre)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})