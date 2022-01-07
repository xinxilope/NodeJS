const express = require('express')
const routes = require('./routes/index')



const app = express()
routes(app)




app.listen(3000, () => console.log('servidor escutando na porta 3000...'))

module.exports = app