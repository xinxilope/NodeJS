const app = require('./app');



const port = 3000
const start = () => {
    try{
        app.listen(process.env.PORT || port, console.log(`servidor rodando na porta ${port}...`))
    } catch(error){
        console.log(error)
    }
}

start()