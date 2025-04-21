// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Sending...";
  status.style.color = "#00796b";

  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "#00796b";
    this.reset();

    setTimeout(() => {
      status.textContent = "";
    }, 3000);
  }, 1000);
});

// To-Do List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 300);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
});

// Image Gallery
const addImgBtn = document.getElementById("addImgBtn");
const imgUrlInput = document.getElementById("imgUrl");
const imageGallery = document.getElementById("imageGallery");

addImgBtn.addEventListener("click", () => {
  const url = imgUrlInput.value.trim();
  if (!url) return;

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Gallery Image";

  img.addEventListener("click", () => {
    img.classList.add("fade-out");
    setTimeout(() => img.remove(), 300);
  });

  imageGallery.appendChild(img);
  imgUrlInput.value = "";
});
