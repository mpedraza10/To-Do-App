// Save the input task element in a variable and the button to add tasks
const newTaskInputElement = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');

// Function to updates if the task is checked in order to cross the task
function updateStatus(selectedTask) {
    const labelToDelete = selectedTask.nextElementSibling;
    if (selectedTask.checked) {
        labelToDelete.classList.add("checked")
    } else {
        labelToDelete.classList.remove("checked")
    }
}

// Function to add and create a new list item, the task, and put it in the ul
function addTask() {
    // Create a new li 
    const newTaskListItem = document.createElement('li');

    // Create a new label element for the task and change its innerText to the value that is in the input
    const newTaskListLabel = document.createElement('label');
    newTaskListLabel.setAttribute('for', 'task');
    newTaskListLabel.innerText = newTaskInputElement.value;

    // Create an input element with the type radio 
    const newTaskRadioListInput = document.createElement('input');
    newTaskRadioListInput.setAttribute('type', 'checkbox');
    newTaskRadioListInput.setAttribute('onClick', 'updateStatus(this)');
    newTaskRadioListInput.setAttribute('class', 'task');

    // Append tu the ul the input and label to the li created
    newTaskListItem.appendChild(newTaskRadioListInput);
    newTaskListItem.appendChild(newTaskListLabel);

    // Save the ul in a variable and append a new child which is the new list item created
    const taskListElement = document.getElementById('tasks-list');
    taskListElement.appendChild(newTaskListItem);

    // Delete everything from the input
    newTaskInputElement.value = "";
}

// Call event listener on the button if it is clicked we add new task using the function addTask
addTaskBtn.addEventListener('click', addTask);

// Added event lister if the user hits enter instead of using the button
newTaskInputElement.addEventListener('keyup', addEnterKey => { 
    if(addEnterKey.key == "Enter") {
        addTask();
    }
});