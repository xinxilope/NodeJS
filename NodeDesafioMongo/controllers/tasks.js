const Task = require('../models/Task')



const listaTodasTasks = async (req, res) => {
    try {
        const todasTasks = await Task.find()
        res.status(200).json(todasTasks)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const criaTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)  
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const listaUmaTask = async (req, res) => {
    try {
        const {id:taskId} = req.params
        const umaTask = await Task.findOne({_id:taskId})
        if (!umaTask) {
            return res.status(404).json({msg:`Nao existe task com o id: ${taskId}`})
        }
        res.status(200).json(umaTask)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskId} = req.params
        const umaTask = await Task.findOneAndDelete({_id:taskId})
        if (!umaTask) {
            return res.status(404).json({msg:`Nao existe task com o id: ${taskId}`})
        }
        res.status(204).json({})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}



module.exports = {
    listaTodasTasks,
    criaTask,
    listaUmaTask,
    updateTask,
    deleteTask
}