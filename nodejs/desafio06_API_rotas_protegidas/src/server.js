const express = require("express")
// const authRouter = require("./routes.js/auth")
// const protectedRouter = require("./routes.js/protected")
const router = require("./routes")

const app = express()

app.use(express.json())
app.use(router)

const PORT = 3000
app.listen(PORT, () => { console.log(`Server: http://localhost:${PORT}`) })
