const {Router} = require('express')
const { bemvindo } = require('../controllers/NotasController')
const Notas = require('../controllers/NotasController')

const router = Router()

router.get('/api/project', Notas.listaTudo)
router.post('/api/project', Notas.criaNota)
router.get('/api/project/:notaId', Notas.listaTask)
router.post('/api/project/:notaId', Notas.criaTask)
router.get('/api/project/:notaId/task/:taskId', Notas.listaUmaTask)







module.exports = router