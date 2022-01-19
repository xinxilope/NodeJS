const mongoose = require('mongoose');


class Database {
    constructor() {
        this.connect();
    }

    connect() {
        return mongoose.connect('mongodb+srv://mateus:1234@nodeexpressprojects.vcris.mongodb.net/nodeDesafioMongo?retryWrites=true&w=majority');
    }
}

module.exports = new Database().connect();