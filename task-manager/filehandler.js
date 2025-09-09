const fs = require('fs');

function saveTask(filePath, tasks) {
    const JSONObj = JSON.stringify(tasks);
    fs.writeFileSync(filePath,JSONObj);
}

function loadTasks(filePath) {
    if (fs.existsSync(filePath)) {
        const dataFile = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(dataFile);
    } else {
        return [];
    }
}

module.exports = {
    saveTask,
    loadTasks
};