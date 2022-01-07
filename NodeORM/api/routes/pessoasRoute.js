const {Router} = require('express')
const { pegaTodasAsPessoas } = require('../controllers/PessoaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router() //inicia os metodos de rota do express

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)

module.exports = router
