const mongoose = require('mongoose')

const connectionString = 
    "mongodb+srv://mateus:1234@nodeexpressprojects.vcris.mongodb.net/nodeDesafioMongo?retryWrites=true&w=majority"


mongoose
    .connect(connectionString)
    .then(() => console.log('CONNECTED TO THE DB'))
    .catch((error) => console.log(error))

