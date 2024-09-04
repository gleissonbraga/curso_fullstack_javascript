const path = require("node:path")

// MOSTRNDO COMO FUNCIONA O PATH
// const fullpath = path.join("src", "scripts", "arquivo.js") // src\scripts\arquivo.js
// console.log(fullpath)

const dir = "src"
const file = "app.js"

// __dirname MOSTRA O CAMINHO ABSOLUTO DESDE O INICIO
const fullpath = path.join(__dirname, dir, file)
console.log(fullpath)


const relativePath = "../arquivos/relatorio.pdf"
// console.log(relativePath)
const absolutePath = path.resolve(__dirname, relativePath)
console.log(absolutePath)


//RETORNA A ULTIMA PARTE DE UM CAMINHO
const fileName = path.basename(relativePath) // arquivo.js
console.log(fileName)


// ME TRAS O NOME DA EXTENSÃO (pdf, csv, txt...)
const ext = path.extname(absolutePath)
console.log(ext)