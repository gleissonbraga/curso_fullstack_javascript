import fs from "node:fs"


export function writeFile(text){
    fs.writeFileSync("meuarquivo.txt", text, "utf-8", (error) => {
        if(error){
            console.log("Erro ao criar o arquivo: ", error.message)
            return
        }
        console.log("Arquivo criado com sucesso!")
    })
}

export function readFile(){
    fs.readFileSync("meuarquivo.txt", "utf-8", (error, data) => {
        if(error){
            console.log("Erro ao ler o arquivo: ", error.message)
            return
        }
        const entries = data.split(",")
        console.log(entries)
    })
}

export function deleteFile(){
    fs.unlinkSync("meuarquivo.txt", (error) => {
        if(error){
            console.log(`Erro ao excluir o arquivo: ${error.message}`)
            return
        }
        console.log("Arquivo excluído com sucesso!")
    })
}

// export default writeFile

// module.exports = writeFile
// module.exports = readFile
// module.exports = deleteFile

// writeFile("Teste")
// readFile()
// deleteFile()