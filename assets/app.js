const addTaskBtn = document.getElementById('add-task-btn');

function addTask() {
    // Save the input task element in a variable
    const newTaskInputElement = document.getElementById('new-task-input');
    
    // Create a new li and make its innerText to the value that is in the input
    const newTaskListItem = document.createElement('li');    
    newTaskListItem.innerText = newTaskInputElement.value;
    
    // Save the ul in a variable and append a new child which is the new list item created
    const taskListElement = document.getElementById('tasks-list');
    taskListElement.appendChild(newTaskListItem);

    // Delete everything from the input
    newTaskInputElement.value = "";
}

addTaskBtn.addEventListener('click', addTask);