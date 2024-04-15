import { format } from "date-fns";

// ALL TASKS ////
export let allTasks = [];

// FACTORY FUNCTION TO CREATE A NEW TASK ///////////////////
function newTask(title, dueDate, priority, notes = "", status, category) {
  const task = {};
  task.title = title;
  task.dueDate = format(dueDate, "MM/dd/yy");
  task.priority = priority;
  task.notes = notes;
  task.status = status;
  task.category = category;
  task.id = Math.random().toString(36).substring(2, 9);

  return task;
}
///////////////////////////////////////////////////////////////////

// add task to array of all tasks ////////////////
const addLatestTask = (task) => {
  allTasks.push(task);
};

// MAKE AN OBJECT USING FORM DATA //////////////////
export function getFormData(form) {
  return Object.fromEntries(new FormData(form));
}

// TURN OBJECT INTO A NEW TASK AND ADD INTO LOCAL STORAGE //////////////////
export function addTask(taskObject, category) {
  if (category === "All") {
    taskObject.category = "All";
  } else {
    taskObject.category = category;
  }
  const task = newTask(
    taskObject.title,
    taskObject.duedate || format(new Date(), "MM/dd/yy"),
    taskObject.priority,
    taskObject.notes,
    taskObject.status,
    taskObject.category
  );

  addLatestTask(task);
  addTasksLocalStorage();
}

// ADD ALL TASKS TO LOCAL STORAGE /////
function addTasksLocalStorage() {
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
}

// ADDING NEW TASK TO UI//////////////////////
export function addNewTaskUi(div) {
  const task = allTasks[allTasks.length - 1];

  // create task element
  div.insertAdjacentHTML(
    "beforeend",
    `
      <div class="task ui-${task.priority}" data-id='${task.id}'>
      <div class='task-info'>
        <div class='task-title'>
          <input type="checkbox" name="status" value="done" id='ui-${task.id}' class='task-done-${task.id}'/>
          <label for="ui-${task.id}" class='task-done-title'>${task.title}</label>
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
  const checkbox = document.querySelector(`.task-done-${task.id}`);
  if (task.status === "done") {
    checkbox.checked = true;
  }
}

// ADD OLD TASKS TO UI, ALLTASKS ARRAY FROM LOCAL STORAGE ///////////////////////////
export function addTasksToUI(div) {
  if (localStorage.getItem("allTasks")) {
    const json = localStorage.getItem("allTasks");
    const tasksFromLS = JSON.parse(json);
    allTasks = tasksFromLS;
    makeTasksElements(div, tasksFromLS || []);
  }
  addTasksLocalStorage();
}

export function makeTasksElements(div, arr) {
  for (const task of arr) {
    div.insertAdjacentHTML(
      "beforeend",
      `
      <div class="task ui-${task.priority}" data-id='${task.id}'>
      <div class='task-info'>
        <div class='task-title'>
          <input type="checkbox" name="status" value="done" id='ui-${task.id}' class='task-done-${task.id}'/>
          <label for="ui-${task.id}" class='task-done-title'>${task.title}</label>
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
    const checkbox = document.querySelector(`.task-done-${task.id}`);
    if (task.status === "done") {
      checkbox.checked = true;
    }
  }
}
