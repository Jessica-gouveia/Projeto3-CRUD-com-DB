const express = require('express')
const app = express()

//TODO:
//conectar o db
const db = require('./data/database')
db.connect()
//usar as rotas
app.use(express.json())

const estudiosRouter = require('./routes/estudios.router')
app.use('/estudios', estudiosRouter)

const tituloRouter = require('./routes/titulos.router')
app.use('/titulos', tituloRouter)

module.exports = app 