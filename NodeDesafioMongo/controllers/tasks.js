const listaTodasTasks = (req, res) => {
    res.send('get all tasks')
}

const criaTask = (req, res) => {
    res.json(req.body)
}

const listaUmaTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}



module.exports = {
    listaTodasTasks,
    criaTask,
    listaUmaTask,
    updateTask,
    deleteTask
}