const taskArray = ["wash","dry","fold"];

function addTask (tasks, task) {
    if (Array.isArray(task)) {
       for (item of task) { 
            tasks.push(item);
       } 
    } else {
        tasks.push(task);
    }
}

function listTasks (tasks) {
    tasks.forEach((task) => console.log(task));
}

module.exports = {
    addTask,
    listTasks
};


// addTask(taskArray,"hang");
// listTasks(taskArray);