const mongoose = require('mongoose')

const subTask = new mongoose.Schema({
    tittle: {type:String, required:true, trim:true},
    taskRelevance: {type:Number, required:true},
    completed: {type:Boolean, required:true},
    createdAt: {type:Date, default: Date.now()},
    updatedAt: {type:Date, default: Date.now()}
}
)




const TaskSchema = new mongoose.Schema({
    tittle: {type:String, required:true, trim:true},
    description: {type:String, required:true, trim:true},
    createdAt: {type:Date, default: Date.now()},
    updatedAt: {type:Date, default: Date.now()},
    task: [subTask]
}
)



module.exports = mongoose.model('Task', TaskSchema)