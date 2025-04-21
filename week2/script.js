// To-Do List Functionality with Delete and Date
function addTodo() {
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  const taskText = input.value;
  const dateTime = new Date().toLocaleString(); // Get the current date and time
  li.textContent = `${taskText} (Added on: ${dateTime})`;

  // Add delete button for the task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

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

// Contact Form Submit (Prevent Page Reload + Loading Spinner)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading animation
  const sendButton = this.querySelector("button");
  sendButton.innerHTML = '<div class="loading"></div>'; // Show the loading spinner

  setTimeout(() => {
    // Simulate successful form submission
    alert("Message sent successfully!");

    // Show "Message Sent" message
    document.getElementById("sentMessage").style.display = "block";

    // Reset form and button after a delay
    this.reset();
    sendButton.innerHTML = 'Send';
    setTimeout(() => {
      document.getElementById("sentMessage").style.display = "none";
    }, 3000);
  }, 1500); // Simulating a 1.5 second delay for submission
});
