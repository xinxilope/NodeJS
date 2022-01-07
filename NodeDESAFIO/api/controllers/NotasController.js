const database = require('../models/index')

class Notas {
    static async bemvindo(req, res) {
        res.status(200).json("bem vindo")
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