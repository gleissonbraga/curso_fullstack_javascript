// primeira forma de evitar seria colocando o "?" na variavel que esta no parametro

function sendSpaceship(spacechip: {pilot: string, copilot?: string}){

}

sendSpaceship({pilot: 'Han Solo', copilot: 'Chewbacca'})

sendSpaceship({pilot: 'Luke'})

// segunda forma seria utilizando o "unknown" ou "any"

// utilizando o any ele tras como se fosse javscript 
// então poderiamos mudar os tipos em qualquer momento

// utilizando o unknown ele deixa reescrevermos porém se vamos atrivuir o valor do input para o text ele gera erro

let input: any

input = 'Test'
input = 20
input = []

let text: string


text = input

// terceira forma seria utilizando o "never"

// function verification(test){
//     if(test){

//     } else {
//         let _check: never

//         let text = _check

//         return _check
//     }
// }