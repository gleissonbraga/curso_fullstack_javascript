// serve para esperar um quantidade de tempo para executar um bloco de código

console.log("Programa iniciado")


const timeoutId = setTimeout(() => {
    console.log("3 segundos se passaram desde que o programa foi iniciado")
}, 1000 * 3)

clearTimeout(timeoutId)