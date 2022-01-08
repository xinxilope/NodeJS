const {Router} = require('express')
const { bemvindo } = require('../controllers/NotasController')
const Notas = require('../controllers/NotasController')

const router = Router()

router.get('/api/project', Notas.listaTudo) //rota para listar tudo
router.post('/api/project', Notas.criaNota) //rota para criar uma nota
router.post('/api/project/:notaId', Notas.criaTask) //rota para criar task dentro de uma nota
router.get('/api/project/:notaId', Notas.listaTask) //rota para listar as tasks dentro de uma nota
router.get('/api/project/:notaId/task/:taskId', Notas.listaUmaTask) //rota para listar uma task dentro de uma nota



module.exports = router