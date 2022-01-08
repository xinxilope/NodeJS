const database = require('../models/index')

class Notas {
    static async listaTudo(req, res) { //mostra todas as notas e tasks
        const listaTodasNotas = await database.Notas.findAll()
        const listaTodasTasks = await database.Tasks.findAll()
        try {
            return res.status(200).json({listaTodasNotas, listaTodasTasks})
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    static async criaNota(req, res) { //cria uma nota
        const novaNota = req.body
        try {
            const novaNotaCriada = await database.Notas.create(novaNota)
            return res.status(201).json(novaNotaCriada)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    static async criaTask(req, res) { //cria uma task dentro de uma nota
        const {notaId} = req.params
        const novaTask = {...req.body, nota_id: Number(notaId)}
        try {
            const novaTaskCriada = await database.Tasks.create(novaTask)
            return res.status(201).json(novaTaskCriada)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }

    static async listaTask(req, res){ //lista todas as tasks de uma nota
        const {notaId} = req.params
        try{
            const todasTaskDaNota = await database.Tasks.findAll( { where: {nota_id: Number(notaId)} } )
            return res.status(200).json(todasTaskDaNota)
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }
    
    static async listaUmaTask(req, res){ //lista uma task dentro de uma nota
        const {notaId, taskId} = req.params
        try{
            const UmaTask = await database.Tasks.findOne( { where: {nota_id: Number(notaId), id: Number(taskId)} } )
            return res.status(200).json(UmaTask)
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }

    static async atualizaNota(req, res){ //atualiza uma nota
        const {notaId} = req.params
        const novasInfos = req.body
        try {
            await database.Notas.update( novasInfos, { where: {id: Number(notaId)}})
            const notaAtualizada = await database.Notas.findOne( { where: {id:Number(notaId)} } )
            return res.status(200).json(notaAtualizada)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
}

module.exports = Notas