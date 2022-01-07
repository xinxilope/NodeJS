const express = require('express')
const routes = require('./routes/index')


const app = express() //inicializo servidor

routes(app) //chama o arquivo na pasta para definir a route

const port = 3000 //porta do servidor
app.listen(port, () => console.log(`servidor rodando na porta ${port}`)) //servidor rodando com essa mensagem e porta

module.exports = app //exporta o app para outros arquivos dentro da pasta do projeto