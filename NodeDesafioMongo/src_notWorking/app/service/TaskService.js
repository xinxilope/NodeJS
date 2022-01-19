const TaskRepository = require('../repository/TaskRepository');

class TaskService {
    async create(payload) {
        return await TaskRepository.create(payload);
    }
}

module.exports = new TaskService();