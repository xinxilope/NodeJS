const database = require('../models/index')

class Tasks {
    static async bemvindo(req, res) {
        res.status(200).json("bem vindo")
    }
}

module.exports = Tasks