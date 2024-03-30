import { format } from "date-fns";

// the latest task created will be stored here (so that we can add to ui)
const latestTask = [];

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
  latestTask.push(task);
};

// ADD MODAL FORM /////////////////////////////////////
export function taskForm() {
  const modal = document.querySelector("dialog");
  modal.insertAdjacentHTML(
    "beforeend",
    `
    <button class="btn-close-modal">×</button>
  <form action="#" class="task-form" method='dialog'>
        <h2>New Task</h2>
        <div class='div1'> 
          <label for="title"><h3>Title</h3></label>
          <input type="text" id="title" name='title' required />
             <label for="date"><h3>Due date</h3></label>
          <input type="date" id="date" name='duedate'/>
        </div>
        <div class='priority'>
          <h3>Priority</h3>
          <div class='btn-priority'>
            <label for='low'>
              <input type="radio" name='priority' value="low" id='low' checked><span class='low'>Low</span>
            </label>
          </div>
          <div class='btn-priority'>
            <label for='med'>
              <input type="radio" name='priority' value="medium" id='med'><span class='med'>Medium</span>
            </label>
          </div>
          <div class='btn-priority'>
            <label for='high'>
              <input type="radio" name='priority' value="high" id='high'><span class='high'>High</span>
            </label>
          </div>
        </div>
        <div class='status'>
          <h3>Status</h3>
         <div class='btn-status'>
            <label for='not'>
              <input type="radio" name='status' value="not-started" id='not' checked><span class='not'>Not started</span>
            </label>
          </div>
          <div class='btn-status'>
            <label for='inprog'>
              <input type="radio" name='status' value="in-progress" id='inprog'><span class='inprog'>In progress</span>
            </label>
          </div>
          <div class='btn-status'>
            <label for='done'>
              <input type="radio" name='status' value="done" id='done'><span class='done'>Done!</span>
            </label>
          </div>
        </div>
         <div class='div-notes'>
          <label for="notes"><h3>Notes</h3></label>
          <textarea name="notes" id="notes" cols="40" rows="2"></textarea>
        </div>
        <button type="submit" class="btn-add">Add task</button>
      </form>
  `
  );
  modal.showModal();
}

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
  const task = latestTask.pop();
  const divAllTasks = document.querySelector(".alltasks");

  // create task element
  divAllTasks.insertAdjacentHTML(
    "beforeend",
    `
      <div class="task" data-id='${task.title}'>
      <div class='task-info'>
        <div class='task-title'>
          <input type="checkbox" name="status" value="done" id='${task.title}' class='task-done'/>
          <label for="${task.title}" class='task-done-title'>${task.title}</label>
        </div>
        <div class="options">
          <p>${task.dueDate}</p>
          <img class='icon edit' src="/src/draw.png" alt="edit/view task">
          <img class='icon delete' src="/src/recycle-bin.png" alt="delete task">
        </div>
      </div>
        <p class='task-notes'>${task.notes}</p>
      </div>
    `
  );
}

// ADD OLD TASKS TO UI FROM LOCAL STORAGE /////
export function addTaskUi(div) {
  for (let [key, value] of Object.entries(localStorage)) {
    const task = JSON.parse(value);
    div.insertAdjacentHTML(
      "beforeend",
      `
      <div class="task" data-id='${task.title}'>
      <div class='task-info'>
        <div class='task-title'>
          <input type="checkbox" name="status" value="done" id='${task.title}' class='task-done'/>
          <label for="${task.title}" class='task-done-title'>${task.title}</label>
        </div>
        <div class="options">
          <p>${task.dueDate}</p>
          <img class='icon edit' src="/src/draw.png" alt="edit/view task">
          <img class='icon delete' src="/src/recycle-bin.png" alt="delete task">
        </div>
      </div>
        <p class='task-notes'>${task.notes}</p>
      </div>
    `
    );
  }
}
