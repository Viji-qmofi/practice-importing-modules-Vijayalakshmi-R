const taskArray = ["wash","dry","fold"];

function addTask (tasks, task) {
    //check if the task is an array
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


