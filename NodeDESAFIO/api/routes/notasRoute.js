const {Router} = require('express')
const Notas = require('../controllers/NotasController')

const router = Router()

router.get('/api/project', Notas.listaTudo)
router.post('/api/project', Notas.criaNota)
router.post('/api/project/:notaId', Notas.criaTask)
router.get('/api/project/:notaId', Notas.listaTask)
router.get('/api/project/:notaId/task/:taskId', Notas.listaUmaTask)
router.put('/api/project/:notaId', Notas.atualizaNota)
router.delete('/api/project/:notaId', Notas.apagaNota)
router.delete('/api/project/:notaId/task/:taskId', Notas.apagaUmaTask)




module.exports = router