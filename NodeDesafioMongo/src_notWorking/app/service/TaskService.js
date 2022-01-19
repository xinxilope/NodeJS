const TaskRepository = require('../repository/TaskRepository');

class TaskService {
    async create(payload) {
        const result = await TaskRepository.create(payload);
        return result;
    }
}

module.exports = new TaskService();