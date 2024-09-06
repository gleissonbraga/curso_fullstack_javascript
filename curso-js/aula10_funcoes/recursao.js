
// Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num) {
    console.log(num)
    if(num % 2 === 0){
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(40)


// É fundamental que uma função recursiva tenha uma forma de parar de chamar novas funções
function dobrar(num) {
    console.log(num)
    dobrar(num * 2)
}

//dobrar(1)


// Para construir uma função recursiva, geralmente partimos de um caso de base
// para garantir que nossa função não vai continuar se chamando para sempre
// fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num) {
    console.log("Número: " + num)
    if(num === 0) { // caso base
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))