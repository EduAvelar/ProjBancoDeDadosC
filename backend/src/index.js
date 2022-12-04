//const { request, response } = require('express')

const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

//deixa a app apta para fazer a conexão com o banco
require('./config/dbConfig')

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(8080)


/*app.get('/', (request, response) => {
    return response.json({
        nome:"eduardo",
        idade: 28,
        profissao:"Quality Assurence",
        formacao:"Engenherio de Software",
        hobby:"aprender a programar"
    })
})*/