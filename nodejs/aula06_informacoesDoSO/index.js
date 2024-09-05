const os = require("node:os")

// Seria para identificar qual o sistema operacional que o usuário utiliza
const plataform = os.platform
console.log(`Plataforma do SO: ${plataform}`) 


// Utilizado para ver a arquitetura do sistema operacional
const arch = os.arch()
console.log(`Arquitetura do SO: ${arch}`) 

// Seriam os processadores
const cpus = os.cpus()
console.log(`Informações da CPU: `, cpus.length) 

// Retorna o total de memória que seu sistema possui
const memory = os.totalmem()
console.log(`Total de memória do PC: `, memory / 1024 / 1024 /1024, "GB")

// Retorna quanto tempo ele esta ligado
const uptime = os.uptime()
console.log(`Quanto tempo esta ligado o PC: `, uptime)
