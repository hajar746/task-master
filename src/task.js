import { format } from "date-fns";

// ALL TASKS ////
const allTasks = [];

// FACTORY FUNCTION TO CREATE A NEW TASK ///////////////////
function newTask(title, dueDate, priority, notes = "", status) {
  const task = {};
  task.title = title;
  task.dueDate = format(dueDate, "MM/dd/yy");
  task.priority = priority;
  task.notes = notes;
  task.status = status;
  task.category = "All";

  return task;
}

// add task to array of all tasks /////
const addLatestTask = (task) => {
  allTasks.push(task);
};

// MAKE AN OBJECT USING FORM DATA
export function getFormData(form) {
  return Object.fromEntries(new FormData(form));
}

// TURN OBJECT INTO A NEW TASK AND ADD INTO LOCAL STORAGE //////////////////
export function addTask(taskObject) {
  const task = newTask(
    taskObject.title,
    taskObject.duedate || format(new Date(), "MM/dd/yy"),
    taskObject.priority,
    taskObject.notes,
    taskObject.status
  );

  addLatestTask(task);
  const json = JSON.stringify(task);
  localStorage.setItem(task.title, json);
}

// ADDING NEW TASKS TO UI
export function addNewTaskUi() {
  const task = allTasks.pop();
  const divAllTasks = document.querySelector(".alltasks");

  // create task element
  divAllTasks.insertAdjacentHTML(
    "beforeend",
    `
      <div class="task ui-${task.priority}" data-id='${task.title}'>
      <div class='task-info'>
        <div class='task-title'>
          <input type="checkbox" name="status" value="done" id='ui-${task.title}' class='task-done'/>
          <label for="ui-${task.title}" class='task-done-title'>${task.title}</label>
        </div>
        <div class="options">
         <p class='ui-status ui-${task.status}'>${task.status}</p>
          <p>${task.dueDate}</p>
          <img class='icon view' src="/src/view.png" alt="edit/view task">
          <img class='icon delete' src="/src/recycle-bin.png" alt="delete task">
        </div>
      </div>
        <p class='task-notes'>${task.notes}</p>
      </div>
    `
  );
}

// ADD OLD TASKS TO UI FROM LOCAL STORAGE ///////////////////////////
function addStoredTasksToArray() {
  for (let [key, value] of Object.entries(localStorage)) {
    const task = JSON.parse(value);
    allTasks.push(task);
  }
}

export function addTasksToUI(div) {
  addStoredTasksToArray();
  for (const task of allTasks) {
    div.insertAdjacentHTML(
      "beforeend",
      `
      <div class="task ui-${task.priority}" data-id='${task.title}'>
      <div class='task-info'>
        <div class='task-title'>
          <input type="checkbox" name="status" value="done" id='ui-${task.title}' class='task-done'/>
          <label for="ui-${task.title}" class='task-done-title'>${task.title}</label>
        </div>
        <div class="options">
          <p class='ui-status ui-${task.status}'>${task.status}</p>
          <p class='ui-date'>${task.dueDate}</p>
          <img class='icon view' src="/src/view.png" alt="edit/view task">
          <img class='icon delete' src="/src/recycle-bin.png" alt="delete task">
        </div>
      </div>
        <p class='task-notes'>${task.notes}</p>
      </div>
     
    `
    );
  }
}