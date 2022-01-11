const express = require('express')
const routes = require('./routes/index')



const app = express()
routes(app)




const port = 3000
app.listen(port, () => console.log('servidor escutando na porta 3000...'))

module.exports = app