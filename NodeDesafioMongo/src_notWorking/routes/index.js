const { Router } = require('express');
const task = require('./task.router')

module.exports = server => {
    server.use((req, res, next) => {
        task(server, new Router());
        next();
    });
}