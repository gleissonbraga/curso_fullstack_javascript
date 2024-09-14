const express = require("express")
const path = require("node:path")
const router = require("./routes")


const app = express()

//configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// configuração de arquivos estáticos
app.use(express.static('public'))

// configuração para ler dados enviado dos formulários, ou seja da requisição
app.use(express.urlencoded({ extended: true }))

// rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Você está no servidor http://localhost:${PORT}`)
})