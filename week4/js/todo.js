const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;
  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => { li.remove(); saveTasks(); };
  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
  Array.from(taskList.children).forEach(li => li.onclick = () => { li.remove(); saveTasks(); });
}

loadTasks();
