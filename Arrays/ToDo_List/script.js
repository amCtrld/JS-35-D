const addTaskButton = document.getElementById('addTask');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const newTaskText = newTaskInput.value;
  if (newTaskText !== "") {
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = newTaskText;
    taskList.appendChild(newTaskItem);
    newTaskInput.value = "";
  }
});
