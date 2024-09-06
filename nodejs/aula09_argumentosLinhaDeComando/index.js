const args = process.argv

const namedArguments = {}

process.argv.slice(2).forEach((arg, index, array) => {
    if(arg.startsWith("--")) {
        const argname = arg.slice(2)
        const argValue = array[index + 1]
        namedArguments[argname] = argValue
    }
})

console.log(namedArguments)