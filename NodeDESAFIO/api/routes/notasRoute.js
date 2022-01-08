const {Router} = require('express')
const { bemvindo } = require('../controllers/NotasController')
const Notas = require('../controllers/NotasController')

const router = Router()

router.get('/api/project', Notas.listaNota)
router.post('/api/project', Notas.criaNota)
router.post('/api/project/:notaId/task', Notas.criaTask)
router.get('/api/project/:notaId', Notas.listaTask)







module.exports = router