let tasks = []; // Initialize an empty array to store tasks

const addTaskButton = document.getElementById('addTask');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const newTaskText = newTaskInput.value;
    if (newTaskText !== "") {
        tasks.push(newTaskText);
        displayTasks();
        newTaskInput.value = "";
    }
});

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item', 'w3-border', 'w3-padding-small', 'w3-round-large', 'w3-margin-bottom');
        
        const taskText = document.createElement('span');
        taskText.textContent = task;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Done';
        deleteButton.classList.add('w3-button', 'w3-red', 'w3-round-large'); 

        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            displayTasks();
        });

        // Append the task text and delete button to the task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);
    });
}

displayTasks();