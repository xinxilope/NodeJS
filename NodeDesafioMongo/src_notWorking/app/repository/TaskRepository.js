const TaskSchema = require('../schema/TaskSchema');

class TaskRepository  {
    async create(payload) {
        return await TaskSchema.create(payload);
    }
}

module.exports = new TaskRepository();