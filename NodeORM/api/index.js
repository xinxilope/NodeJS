const express = require('express')
const bodyParser = require('body-parser')

const app = express() //inicializo servidor

app.use(bodyParser.json()) //converter informacoes para json quando passar por qualquer rota (middleware)

const port = 3000 //porta do servidor

app.get('/teste', (req, res) => //definir a rota: http://localhost:3000/teste
    res.status(200).send({ mensagem: 'boas vindas à API' }) //servidor responde com um objeto com essa mensagem dentro
)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`)) //servidor rodando com essa mensagem

module.exports = app //exporta o app para outros arquivos dentro da pasta do projeto