const fs = require("node:fs")

const filename = "arquivo.txt"
const exists = fs.existsSync(filename)

if(exists){
    fs.readFile(filename, "utf-8", (error, data) => {
        if(error){
            console.log("Erro ao ler o arquivo", error.message)
            return
        }
        const entries = data.split(",") // trás com formatação em listas
        console.log(entries)
        entries.forEach((entry) => console.log(entry)) // trás em quebra de linha
    })
    
} else {
    console.log("O arquivo não existe!")
}






// try {
//     const data = fs.readFileSync("./arquivo.txt", "utf-8")
//     console.log(data)
// } catch (error) {
//     console.log("Erro ao ler o arquivo", error.message)
// }