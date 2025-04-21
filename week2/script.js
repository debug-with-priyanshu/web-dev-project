// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "All fields are required.";
    status.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    status.textContent = "Enter a valid email.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Form submitted successfully!";
  status.style.color = "green";
  document.getElementById("contactForm").reset();
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
