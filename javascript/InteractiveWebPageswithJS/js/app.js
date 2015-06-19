//Problem: user interaction doesn't provide desired results

//Solution: add interactivity for management of tasks


var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //completed-tasks

//New task list item
var createNewTaskElement = function(taskString) {
	//Create list item
	var listItem = document.createElement("li");
	//input (checkbox)
	var checkbox = document.createElement("input");
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input");
	//button.edit
	var editButton = document.createElement('button');
	//button.delete
	var deleteButton = document.createElement("button");
	//each element modified

checkbox.type = "checkbox";
editInput.type = "text";

editButton.innerText = "Edit";
editButton.className = "edit";

deleteButton.innerText = "Delete";
deleteButton.className = "delete";

label.innerText = taskString;


	//Each element needs appending
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}
//Add a new task
var addTask = function() {
	console.log("Add task...");
	//create a new list item with text from ?#newtask:
	var listItem = createNewTaskElement(taskInput.value);
	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
}

//Edit an existing task
var editTask = function() {
	console.log("Edit task...");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");
	//if the class of the parent is .editMode
	if (containsClass) {
		//switch from .editMode
		//make label text become input's value
		label.innerText = editInput.value;
	} else{
		
	}
		//switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;


		//Toggle .editMode on the listItem
		listItem.classList.toggle("editMode");
}

//Delete a task
var deleteTask = function() {
	console.log("Delete task...");

	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//remove the parent list item from the ul
	ul.removeChild(listItem);
}

//Mark task as complete
var taskCompleted = function() {
	console.log("Completed task...");
		//append task list item to #completed-tasks
		var listItem = this.parentNode;
		completedTaskHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskIncomplete);
}


//Mark task as incomplete
var taskIncomplete = function() {
	console.log("Task incomplete...");
		//append task list itme to #incomplete-tasks
		var listItem = this.parentNode;
		incompleteTasksHolder.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log('Bind list item events...');
	//making this function to save from doing something twice
		//select children
	var checkbox = taskListItem.querySelector("input[type=checkbox]");

	var editButton = taskListItem.querySelector("button.edit");

	var deleteButton = taskListItem.querySelector("button.delete");

		//bind editTask to edit button
	editButton.onclick = editTask;
		//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;
		//checkbox event handler binding
	checkbox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function () {
	console.log("AJAX request");
}

//Set the click handler to the addTask function
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);



//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
	bindTaskEvents(incompleteTasksHolder.children[i], taskIncomplete)
}
		//bind events to list item's children (taskCompleted)

//cycle over completeTasksHolder ul list items
for(var i = 0; i < completedTaskHolder.children.length; i++){
	bindTaskEvents(completedTaskHolder.children[i], taskCompleted)
}
		//bind events to list itmen's children (taskIncomplete)
		




















