const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')

//define as rotas da aplicacao
module.exports = app => {
    app.use(bodyParser.json())
    
    app.use(pessoas)
}