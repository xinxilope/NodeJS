const mongoose = require('mongoose')

const subTask = new mongoose.Schema({
    tittle: {type:String, required:true, trim:true},
    taskRelevance: {type:Number, required:true},
    completed: {type:Boolean, required:true}
},
{
    timestamps: true
}
)




const TaskSchema = new mongoose.Schema({
    tittle: {type:String, required:true, trim:true},
    description: {type:String, required:true, trim:true},
    task: [subTask]
},
{
    timestamps: true
}
)



module.exports = mongoose.model('Task', TaskSchema)