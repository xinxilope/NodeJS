const database = require('../models/index')

class Notas {
    static async listaNota(req, res) {
        const listaTodasNotas = await database.Notas.findAll()
        try {
            return res.status(200).json(listaTodasNotas)
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
}

module.exports = Notas