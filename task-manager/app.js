//Import custom maodules
const files = require('./filehandler');
const tasks = require('./taskManager');

//Import in built module
const path = require('path');

const newFilePath = path.join(__dirname, "tasks.json");
const taskArray = files.loadTasks(newFilePath);


tasks.addTask(taskArray,"sort");
tasks.addTask(taskArray,["wash","dry","hang","fold"]);

tasks.listTasks(taskArray);

files.saveTask(newFilePath,taskArray);