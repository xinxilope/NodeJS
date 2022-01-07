const {Router} = require('express')
const { bemvindo } = require('../controllers/NotasController')
const Notas = require('../controllers/NotasController')

const router = Router()

router.get('/api/project', Notas.bemvindo)
router.post('/api/project', Notas.criaNota)







module.exports = router