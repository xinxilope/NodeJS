const express = require('express')
const tasks = require('./routes/tasks')
require('./db/connect')


const app = express()




//middleware
app.use(express.json())


//routes
app.get('/hello', (req, res) => {
    res.send("Task manager app")
})

app.use('/api/v1/tasks', tasks)







//port
const port = 3000

app.listen(3000, console.log(`server is listening on port ${port}...`))