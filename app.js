let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("task-list");
const progressBar = document.getElementById("progress");
const numbers = document.getElementById("numbers");

function updateTaskList() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class="task ${task.completed ? "completed" : ""}">
        <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})" />
        <p>${task.text}</p>
      </div>
      <div class="icons">
        <i class="fa-solid fa-pen-to-square" onclick="editTask(${index})"></i>
        <i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i>
      </div>
    `;

    taskList.appendChild(listItem);
  });

  updateProgress();
}

function updateProgress() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;

  numbers.textContent = ${completed}/${total};
  progressBar.style.width = ${(completed / total) * 100 || 0}%;
}

function addTask(text) {
  if (text.trim() === "") return;

  tasks.push({ text, completed: false });
  updateTaskList();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText;
    updateTaskList();
  }
}

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});