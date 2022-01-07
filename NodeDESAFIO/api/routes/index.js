const bodyParser = require('body-parser')
const tasks = require('./tasksRoute')


module.exports = app => {
    app.use(bodyParser.json())
    
    app.use(tasks)
}