// THEN(): utiliza da função 'RESOLVE' que temos dentro da promises e trás para nós o resultado
// CATCH(): utiliza da função 'REJECT' que temos dentro da promises e trás para nós o resultado
// FINALLY(): sempre executara o código


function execute() {
    return new Promise((resolve, reject) => {
        console.log("A promise esta sendo executada...")
        setTimeout(() => {
            if (false) {
                reject(false)
            } else {
                console.log("Resolvendo a promise...")
                resolve(42)
            }

        }, 1000 * 2)
    })
}


execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo ${err}`)
}).finally(() => {
    console.log("A promise foi finalizada")
})