
let tasks = []; // Initialize an empty array to store tasks

const addTaskButton = document.getElementById("addTask");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");
const highPriority = document.getElementById("high");
const mediumPriority = document.getElementById("mid");
const lowPriority = document.getElementById("low");

// Retrieve tasks from session storage on page load
const storedTasks = sessionStorage.getItem('todoList');
if (storedTasks) {
    tasks = JSON.parse(storedTasks);
}

addTaskButton.addEventListener("click", () => {
    const newTaskText = newTaskInput.value;
    if (newTaskText !== "") {
        let priority = "mid"; // Default priority
        if (highPriority && highPriority.checked) {
            priority = "high";
        } else if (lowPriority && lowPriority.checked) {
            priority = "low";
        }
        tasks.push({ task: newTaskText, priority: priority });
        displayTasks();
        newTaskInput.value = "";
        saveToSessionStorage();
    }
});

function displayTasks() {
    taskList.innerHTML = ""; // Clear the list before displaying tasks

    // Sort tasks based on priority
    tasks.sort((a, b) => {
        if (a.priority === b.priority) {
            return 0;
        } else if (a.priority === "high") {
            return -1;
        } else if (b.priority === "high") {
            return 1;
        } else if (a.priority === "low") {
            return 1;
        } else {
            return -1;
        }
    });

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item", "w3-padding-small", "w3-round", "w3-margin-bottom");

        const taskText = document.createElement("span");
        taskText.textContent = task.task;

        // Create a container for the buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("task-buttons");

        // Create a done button
        const doneButton = document.createElement("button");
        doneButton.classList.add("w3-button", "header", "font-2", "w3-round-large");
        const doneIcon = document.createElement("i");
        doneIcon.classList.add("fa", "fa-check");
        doneButton.appendChild(doneIcon);

        doneButton.addEventListener("click", () => {
            taskText.classList.toggle("task-done");
        });

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("w3-button", "font-2", "header", "w3-round-large");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa", "fa-trash");
        deleteButton.appendChild(deleteIcon);
        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            displayTasks();
            saveToSessionStorage();
        });

        // Add priority icon
        const priorityIcon = document.createElement("i");
        priorityIcon.classList.add("fa", "fa-flag", "w3-margin");
        if (task.priority === "high") {
            priorityIcon.classList.add("w3-text-red");
        } else if (task.priority === "mid") {
            priorityIcon.classList.add("w3-text-yellow");
        } else {
            priorityIcon.classList.add("w3-text-green");
        }
        buttonContainer.appendChild(priorityIcon);

        // Create an edit button
        const editButton = document.createElement("button");
        editButton.classList.add("w3-button", "font-2", "header", "w3-round-large");
        const editIcon = document.createElement("i");
        editIcon.classList.add("fa", "fa-pencil");
        editButton.appendChild(editIcon);

        // Add event listener for edit button
        editButton.addEventListener("click", () => {
            if (taskText.isContentEditable) {
                taskText.contentEditable = "false";
                tasks[index].task = taskText.textContent;
                saveToSessionStorage();
                editIcon.classList.remove("fa-save");
                editIcon.classList.add("fa-pencil");
                taskText.classList.remove("w3-border-0");
            } else {
                taskText.contentEditable = "true";
                taskText.focus();
                editIcon.classList.remove("fa-pencil");
                editIcon.classList.add("fa-save");
                taskText.classList.add("my-input", "no-border");
            }
        });

        // Append the buttons to the container
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(deleteButton);

        // Append the task text and button container to the task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(buttonContainer);

        // Append the task item to the task list
        taskList.appendChild(taskItem);
    });
}

function saveToSessionStorage() {
    sessionStorage.setItem('todoList', JSON.stringify(tasks));
}

displayTasks();