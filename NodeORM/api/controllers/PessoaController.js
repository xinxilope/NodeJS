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
    
    static async pegaUmaPessoa(req, res){
        const {id} = req.params //pega o id na rota /pessoas:id
        try{
            const umaPessoa = await database.Pessoas.findOne( { where: {id:Number(id)} } ) //procura na database a pessoa com o id
            return res.status(200).json(umaPessoa) //retorna a pessoa com o id informado
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body //pega as informacoes no body da requisição
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa) //pega as informacoes no body e cria nova pessoa
            return res.status(200).json(novaPessoaCriada) //retorna a nova pessoa criada
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }

    static async atualizaPessoa(req, res){
        const {id} = req.params //pega o id na rota /pessoas:id
        const novasInfos = req.body //pega as informacoes para atualizar no body da requisição
        try {
            await database.Pessoas.update( novasInfos, { where: {id:Number(id)} } ) //atualiza direto a pessoa com as novasInfos no id informado
            const pessoaAtualizada = await database.Pessoas.findOne( { where: {id:Number(id)} } ) //procura a pessoa atualizada para retornar
            return res.status(200).json(pessoaAtualizada) //retorna a pessoa atualizada
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }

    static async apagaPessoa(req, res){
        const {id} = req.params //pega o id na rota /pessoas:id
        try {
            await database.Pessoas.destroy( { where: {id:Number(id)} } ) //deleta a pessoa com o id informado
            return res.status(200).json(`Pessoa com o id: ${id} deletada com sucesso`) //retorna a msg dizendo pessoa deletada
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }

    static async pegaUmaMatricula(req, res){
        const {estudanteId, matriculaId} = req.params
        try{
            const umaMatricula = await database.Matriculas.findOne( { where: {
                id: Number(matriculaId),
                estudante_Id: Number(estudanteId) 
            } } )
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }

    static async criaMatricula(req, res){
        const {estudanteId} = req.params //pega o estudanteId dos parametros
        const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula) //retorna a nova matricula criada
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message) //caso tenha erro devolve o erro
        }
    }
}

module.exports = PessoaController