const {Router} = require('express')
const { bemvindo } = require('../controllers/TasksController')
const Tasks = require('../controllers/TasksController')

const router = Router()

router.get('/api/project', Tasks.bemvindo)







module.exports = router