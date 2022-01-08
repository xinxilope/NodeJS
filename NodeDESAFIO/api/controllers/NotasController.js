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
}

module.exports = Notas