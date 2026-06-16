const tasks = [];

function addTask(task, callback) {
    setTimeout(() => {
        tasks.push({
            task,
            completed: false
        });

        callback();
    }, 1000);
}

function completeTask(taskName, callback) {
    setTimeout(() => {

        const task = tasks.find(
            t => t.task === taskName
        );

        if (task) {
            task.completed = true;
        }

        callback();
    }, 1000);
}

function showTasks() {
    console.table(tasks);
}

addTask("Learn JS", () => {

    console.log("Task Added");

    completeTask("Learn JS", () => {

        console.log("Task Completed");

        showTasks();

    });

});