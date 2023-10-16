const express = require('express')
const app = express();
const connection = require("./database/config")
const routes = require("./routes")
require('dotenv').config()

routes(app)
app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})