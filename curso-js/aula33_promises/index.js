// // As promises permitem que possamos trabalhar como assincrono porem trazendo uma resposta

// Padrão da promises é estar pending
// pending
// resolved - Foi executada com sucesso  devolve um valor
// rejected
// finalizada

// const p = new Promise((resolve, reject) => {
//     console.log("A promise está sendo executada")
//     setTimeout(() => {
//         if(true) {
//             reject(false)
//         }
//         console.log("resolvendo a promise...")
//         resolve(true)
//     }, 100 * 2)
// })

// console.log(p)

// setTimeout(() => {
//     console.log(p)
// }, 1000 * 3);


// FORMA CORRETA DE SE UTILIZAR SERIA COM UMA FUNÇÃO

function execute() {
    return new Promise((resolve, reject) => {
        console.log("A promise esta sendo executada...")
        setTimeout(() => {
            console.log("Resolvendo a promise...")
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000);