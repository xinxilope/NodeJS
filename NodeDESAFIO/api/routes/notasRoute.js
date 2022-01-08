const {Router} = require('express')
const { bemvindo } = require('../controllers/NotasController')
const Notas = require('../controllers/NotasController')

const router = Router()

router.get('/api/project', Notas.listaTudo)
router.post('/api/project', Notas.criaNota)
router.post('/api/project/:notaId', Notas.criaTask)
router.get('/api/project/:notaId', Notas.listaTask)
router.get('/api/project/:notaId/task/:taskId', Notas.listaUmaTask)
router.put('/api/project/:notaId', Notas.atualizaNota)



module.exports = router