const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'LocalHost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao