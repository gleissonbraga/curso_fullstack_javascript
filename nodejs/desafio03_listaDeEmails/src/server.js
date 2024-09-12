const express = require("express")
const path = require("node:path")


const app = express()

app.set('view engine', 'ejs') // define configurações especificas
app.set('views', path.join(__dirname, 'views'))


// configuração básica do servidor
app.get('/', (req, res) => {
    res.render('index')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Você está conectado no servidor: http://localhost:${PORT}`)
})