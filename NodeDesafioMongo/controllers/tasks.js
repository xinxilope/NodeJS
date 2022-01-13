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

const listaUmaTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}



module.exports = {
    listaTodasTasks,
    criaTask,
    listaUmaTask,
    updateTask,
    deleteTask
}