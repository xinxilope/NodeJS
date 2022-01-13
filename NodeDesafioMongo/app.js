const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

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

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, console.log(`servidor rodando na porta ${port}...`))
    } catch(error){
        console.log(error)
    }
}

start()