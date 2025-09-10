//Import custom maodules
const files = require('./filehandler');
const tasks = require('./taskManager');

//Import in built module
const path = require('path');
const fs = require("fs");

const newFilePath = path.join(__dirname, "tasks.json");

// Always reset tasks.json to empty at program start
fs.writeFileSync(newFilePath, JSON.stringify([]));

const taskArray = files.loadTasks(newFilePath);


tasks.addTask(taskArray,"sort");
tasks.addTask(taskArray,["wash","dry","hang","fold"]);

tasks.listTasks(taskArray);

files.saveTask(newFilePath,taskArray);

/*Output
node app.js
sort
wash
dry
hang
fold */