const addTaskBtn = document.getElementById('add-task-btn');

function addTask() {
    // Save the input task element in a variable
    const newTaskInputElement = document.getElementById('new-task-input');
    
    // Create a new li 
    const newTaskListItem = document.createElement('li');

    // Create a new label element for the task and change its innerText to the value that is in the input
    const newTaskListLabel = document.createElement('label');
    newTaskListLabel.setAttribute('for', 'task');
    newTaskListLabel.innerText = newTaskInputElement.value;

    // Create an input element with the type radio 
    const newTaskRadioListInput = document.createElement('input');
    newTaskRadioListInput.setAttribute('type', 'checkbox');
    newTaskRadioListInput.setAttribute('id', 'task');

    // Append tu the ul the input and label to the li created
    newTaskListItem.appendChild(newTaskRadioListInput);
    newTaskListItem.appendChild(newTaskListLabel);

    // Save the ul in a variable and append a new child which is the new list item created
    const taskListElement = document.getElementById('tasks-list');
    taskListElement.appendChild(newTaskListItem);

    // Delete everything from the input
    newTaskInputElement.value = "";
}

addTaskBtn.addEventListener('click', addTask);