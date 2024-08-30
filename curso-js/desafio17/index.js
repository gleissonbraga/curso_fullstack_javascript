const App = require("./App")

App.createUser("gleisson@gmail.com", "Gleisson Braga")
App.createUser("Camila@gmail.com", "Camila Ferreira")
App.createUser("Jose@gmail.com", "Jose Arlindo")


App.deposit("gleisson@gmail.com", 100)

App.transfer("gleisson@gmail.com", "camila@gmail.com", 20)

App.changeLoanFee(10)
App.takeLoan("Jose@gmail.com", 2000, 24)

console.log(App.findUser("gleisson@gmail.com"))
console.log(App.findUser("gleisson@gmail.com").account)

console.log(App.findUser("Camila@gmail.com"))
console.log(App.findUser("Camila@gmail.com").account)

console.log(App.findUser("Jose@gmail.com"))
console.log(App.findUser("Jose@gmail.com").account)
console.log(App.findUser("Jose@gmail.com").account.loans[0].installments)