const database = require('../models/index')

class Notas {
    static async listaTudo(req, res) {
        const listaTodasNotas = await database.Notas.findAll()
        const listaTodasTasks = await database.Tasks.findAll()
        try {
            return res.status(200).json({listaTodasNotas, listaTodasTasks})
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    static async criaNota(req, res) {
        const novaNota = req.body
        try {
            const novaNotaCriada = await database.Notas.create(novaNota)
            return res.status(201).json(novaNotaCriada)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    static async listaTask(req, res){
        const {notaId} = req.params
        try{
            const todasTaskDaNota = await database.Tasks.findAll( { where: {nota_id: Number(notaId)} } )
            return res.status(200).json(todasTaskDaNota)
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }

    static async criaTask(req, res) {
        const {notaId} = req.params
        const novaTask = {...req.body, nota_id: Number(notaId)}
        try {
            const novaTaskCriada = await database.Tasks.create(novaTask)
            return res.status(201).json(novaTaskCriada)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    static async listaUmaTask(req, res){
        const {notaId, taskId} = req.params
        try{
            const UmaTask = await database.Tasks.findOne( { where: {nota_id: Number(notaId), id: Number(taskId)} } )
            return res.status(200).json(UmaTask)
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }
}

module.exports = Notas