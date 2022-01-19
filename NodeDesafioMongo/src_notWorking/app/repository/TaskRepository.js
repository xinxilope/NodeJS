const TaskSchema = require('../schema/TaskSchema');

class TaskRepository  {
    async create(payload) {
        return TaskSchema.create(payload);
    }
}

module.exports = new TaskRepository();