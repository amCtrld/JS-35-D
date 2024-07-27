let tasks = []; // Initialize an empty array to store tasks

const addTaskButton = document.getElementById("addTask");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  const newTaskText = newTaskInput.value;
  if (newTaskText !== "") {
    tasks.push(newTaskText);
    displayTasks();
    newTaskInput.value = "";
  }
});

function displayTasks() {
  taskList.innerHTML = ""; // Clear the list before displaying tasks
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add(
      "task-item",
      "w3-padding-small",
      "w3-round",
      "w3-margin-bottom"
    );

    const taskText = document.createElement("span");
    taskText.textContent = task;

    // Create a container for the buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");

    // Create a done button
    const doneButton = document.createElement("button");
    doneButton.classList.add("w3-button", "done", "w3-round-large");
    const doneIcon = document.createElement("i");
    doneIcon.classList.add("fa", "fa-check");
    doneButton.appendChild(doneIcon);

    doneButton.addEventListener("click", () => {
      taskText.classList.toggle("task-done");
    });

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("w3-button", "delete", "w3-round-large");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash");
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      displayTasks();
    });

    // Append the buttons to the container
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);

    // Append the task text and button container to the task item
    taskItem.appendChild(taskText);
    taskItem.appendChild(buttonContainer);

    // Append the task item to the task list
    taskList.appendChild(taskItem);
  });
}

displayTasks();
