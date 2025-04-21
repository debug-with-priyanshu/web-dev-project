// To-Do Functionality
function addTodo() {
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  input.value = "";
}

// Image Gallery Functionality
function addImage() {
  const urlInput = document.getElementById("imageUrl");
  const gallery = document.getElementById("images");

  const url = urlInput.value.trim();
  if (!url) return;

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Gallery Image";
  gallery.appendChild(img);

  urlInput.value = "";
}

// Contact Form Submit (Prevent Page Reload)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
