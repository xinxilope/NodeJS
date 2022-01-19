const TaskService = require('../service/TaskService')


class TaskController {
    listaTodasTasks = async (req, res) => {
        try {
            const todasTasks = await TaskService.find()
            return res.status(200).json(todasTasks)
        } catch (error) {
            return res.status(500).json({msg:error})
        }
    }

    criaTask = async (req, res) => {
        try {
            const task = await TaskService.create(req.body)
            return res.status(201).json(task)  
        } catch (error) {
            return res.status(500).json({msg:error})
        }
    }

    listaUmaTask = async (req, res) => {
        try {
            const {id:taskId} = req.params
            const umaTask = await TaskService.findOne({_id:taskId})
            if (!umaTask) {
                return res.status(404).json({msg:`Nao existe task com o id: ${taskId}`})
            }
            return res.status(200).json(umaTask)
        } catch (error) {
            return res.status(500).json({msg:error})
        }
    }

    updateTask = async (req, res) => {
        try {
            const {id:taskId} = req.params
            const umaTask = await TaskService.findOneAndUpdate({_id:taskId}, req.body, {
                new:true,
                runValidators:true
            })
            if (!umaTask) {
                return res.status(404).json({msg:`Nao existe task com o id: ${taskId}`})
            }
            return res.status(200).json(umaTask)
        } catch (error) {
            return res.status(500).json({msg:error})
        }
    }

    deleteTask = async (req, res) => {
        try {
            const {id:taskId} = req.params
            const umaTask = await TaskService.findOneAndDelete({_id:taskId})
            if (!umaTask) {
                return res.status(404).json({msg:`Nao existe task com o id: ${taskId}`})
            }
            return res.status(204).json({})
        } catch (error) {
            return res.status(500).json({msg:error})
        }
    }
}



module.exports = new TaskController()