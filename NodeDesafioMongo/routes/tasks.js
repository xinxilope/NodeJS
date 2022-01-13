const express = require('express')
const router = express.Router()
const {listaTodasTasks, criaTask, listaUmaTask, updateTask, deleteTask} = require('../controllers/tasks')


router.route('/').get(listaTodasTasks)
router.route('/').post(criaTask)
router.route('/:id').get(listaUmaTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)



module.exports = router