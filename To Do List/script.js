const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    // Use the correct property to get the input value
    const task = taskInput.value.trim();
    if (task) {
        createTaskElement(task);
        taskInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a task!");
    }
}

addButton.addEventListener("click", addTask);

function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.textContent = task;

    // Fix typo: use 'document.createElement'
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteTask";

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem); // Remove the task when delete is clicked
    });
}

function saveTasks() {
    const tasks = [];

    taskList.querySelectorAll("li").forEach(function (item) {
        // Remove "Delete" button text from task content
        tasks.push(item.textContent.replace("Delete", "").trim());
    });

    // Save the tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Create list elements for each task
    tasks.forEach(createTaskElement);
}

// Load tasks when the page loads
window.addEventListener("load", loadTasks);
