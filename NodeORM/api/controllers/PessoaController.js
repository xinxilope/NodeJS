const database = require('../models/index')

class PessoaController {
    static async pegaTodasAsPessoas(req, res) { //static serve para nao precisar instanciar novamente a classe PessoaController
        try {
            const todasAsPessoas = await database.Pessoas.findAll() //async para achar todas as pessoas na database
            return res.status(200).json(todasAsPessoas) //retorna todasAsPessoas em JSON com status 200
        } catch (error) {
            return res.status(500).json(error.message) //tenta retornar as pessoas, e caso tenha erro devolve o erro
        }
    }
}

module.exports = PessoaController