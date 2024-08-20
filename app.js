

function save() {
    // Get input values
    let taskTitle = document.getElementById("Short-description").value;
    let taskDescription = document.getElementById("Long-description").value;
    let addedTaskContainer = document.querySelector(".Addedtask");

    // Validate input
    if (taskTitle === '') {
        alert('Please enter a task title.');
        return;
    }

    // Create a new task element
    let newTask = document.createElement("div");
    newTask.classList.add("task-item");  // Optional: Add class for styling

    let taskTitleElement = document.createElement("h4");
    taskTitleElement.innerText = taskTitle;

    let taskDescriptionElement = document.createElement("p");
    taskDescriptionElement.innerText = taskDescription;

    // Append title and description to the new task element
    newTask.appendChild(taskTitleElement);
    newTask.appendChild(taskDescriptionElement);

    // Append the new task element to the container
    addedTaskContainer.appendChild(newTask);

    // Clear input fields after saving
    document.getElementById('Short-description').value = '';
    document.getElementById('Long-description').value = '';

    //To complete a task
    newTask.addEventListener('click', ()=>{
        newTask.style.textDecorationLine = 'line-through'
    })
    newTask.addEventListener('dblclick', ()=>{
        addedTaskContainer.removeChild(newTask)
    })


}


