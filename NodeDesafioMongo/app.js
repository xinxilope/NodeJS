const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express()


//middleware
app.use(express.json())

//routes
app.use('/api/project', tasks)







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