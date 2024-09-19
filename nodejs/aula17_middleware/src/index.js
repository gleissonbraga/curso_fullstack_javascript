const express = require('express')
const middlewareC = require('./middleware/middlewar-c')
const uploadMiddlewares = require('./middleware/upload-middleware')

// utilizando middleware da forma correta
// baixando pacote especifico (multer "trabalha com upload de arquivos")

const app = express()

app.use(express.static('public'))

app.post('/upload', uploadMiddlewares.single('image'), (req, res) => {
    console.log(req.file, req.body)
    res.json({message: 'Arquivo salvo com sucesso!'})
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})









// **********************************************
// usando middleware de forma simples


// app.use(middlewareC)

// // Metodo padrão para usar middleware
// // app.use()

// // primeiro modo de criar uma middleware
// app.use(function (req, res, next) {
//     console.log('Executando middleware A')
//     req.middlewareA = 'OK!'
//     next()
// })

// // segundo modo sem app.use
// function middlewareB(req, res, next) {
//     console.log('Executando middleware B')
//     req.middlewareB = 'OK!'
//     next()
// }

// app.get('/testeA', (req, res) => {
//     console.log({ a: req.middlewareA, b: req.middlewareB })
//     throw new Error('Algo deu muito errado')
//     res.end()
// })

// app.get('/testeB', middlewareB, (req, res) => {
//     console.log({ a: req.middlewareA, b: req.middlewareB })
//     res.end()
// })

// app.use(function (err, req, res, next) {
//     if(err) {
//         console.log(err.message)
//         res.status(400)
//         res.json({message: err.message})
//     } else {
//         next()
//     }
// })