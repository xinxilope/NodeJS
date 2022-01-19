const TaskController = require('../app/controller/TaskController');
const createValidation = require('../app/validation/task/create');

module.exports = (server, routes, prefix = '/api/project') => {
    routes.get('/', createValidation, TaskController.listaTodasTasks);
    routes.post('/', createValidation, TaskController.criaTask);
    routes.get('/:id', createValidation, TaskController.listaUmaTask);
    routes.put('/:id', createValidation, TaskController.updateTask);
    routes.delete('/:id', createValidation, TaskController.deleteTask);
    server.use(prefix, routes);
}