function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const taskLeft = document.createElement("div");
  taskLeft.className = "task-left";

  const circle = document.createElement("div");
  circle.className = "circle";
  circle.innerHTML = " ";
  circle.onclick = () => {
    circle.classList.toggle("completed");
    taskText.classList.toggle("completed");
    circle.innerHTML = circle.classList.contains("completed") ? "✔" : " ";
  };

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = text;

  taskLeft.appendChild(circle);
  taskLeft.appendChild(taskText);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "🗑";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(taskLeft);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
