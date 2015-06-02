//Problem: user interaction doesn't provide desired results.
//Solution: provide interactivity so that user can manage daily tasks.

var taskInput = document.getElementById("new-task");//new-task
var addButton = document.getElementsByTagName("button")[0];//add button
var incompleteTasksholder = document.getElementById("incomplete-tasks");//incomplete-tasks
var completedTasksholder = document.getElementById("completed-tasks");//completed-tasks
//Add a new task
var addTask = function() {
	console.log("add task...");
	//when the button is pressed
	//create a new list item with the text from #new-task:
		//input checkbox
		//label
		//input (text)
		//button.edit
		//button.delete
		//Each elements, needs modified and appended
}

//Edit exiting task
var editTask = function() {
	console.log("edit task...");
	//when the edit button is pressed
	//if the class of the parent is .editMode
		//switch from .editMode
		//label text become the input's value
	//else
		//switch to .editMode
		//input value becomes the label's text

		//toggle .editMode
}


var deleteTask = function() {
	console.log("delete task...");
//Delete an existing task
	//when the delete button is pressed
		//remove the parent list item from the url
}

var taskCompleted = function() {
	console.log("completed task...");
//Mark a task as complete
	//When the checkbox is checked
		//Append the task list item to the #completed-tasks
}

var taskIncomplete = function() {
	console.log("task incomplete...");
//Mark a task as incomplete
	//when the checkbox is unchecked
		//append the task list item to the #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
	console.log("bind list item events")
	//select taskListItem children
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	//bind editTask to edit button
	editButton.onclick = editTask;


	//bind deleteTask to delete button
	deleteButton.onclick = deleteTask;

	//bind checkboxEventHandler to checkbox
	checkbox.on

}

//set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
		//bind events to list items children (taskCompleted)
		bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}


//cycle over taskCompletedHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
		//bind events to list items children (taskIncomplete)
		bindTaskEvents(incompleteTasksHolder.children[i], taskIncomplete);
}



