import { format } from "date-fns";

export const allTasks = [];

// FACTORY FUNCTION TO CREATE A NEW TASK ///////////////////
function newTask(title, dueDate = new Date(), priority, notes = "", status) {
  const task = {};
  task.title = title;
  task.dueDate = format(dueDate, "MM/dd/yy");
  task.priority = priority;
  task.notes = notes;
  task.status = status;
  task.category = "All";

  allTasks.push(task);
  return task;
}

// ADD MODAL FORM /////////////////////////////////////
export function taskForm() {
  const modal = document.querySelector("dialog");
  modal.insertAdjacentHTML(
    "beforeend",
    `
    <button class="btn-close-modal">×</button>
  <form action="#" class="task-form">
        <h2>New Task</h2>
        <div class='div1'> 
          <label for="title"><h3>Title</h3></label>
          <input type="text" id="title" name='title' required />
             <label for="date"><h3>Due date</h3></label>
          <input type="date" id="date" name='duedate' required />
        </div>
        <div class='priority'>
          <h3>Priority</h3>
          <div class='btn-priority'>
            <label for='low'>
              <input type="radio" name='priority' value="low" id='low'><span class='low'>Low</span>
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
              <input type="radio" name='status' value="not-started" id='not'><span class='not'>Not started</span>
            </label>
          </div>
          <div class='btn-status'>
            <label for='inprog'>
              <input type="radio" name='status' value="in-progress" id='inprog'><span class='inprog'>In progress</span>
            </label>
          </div>
          <div class='btn-status'>
            <label for='done'>
              <input type="checkbox" name='status' value="done" id='done'><span class='done'>Done!</span>
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

// TURN OBJECT INTO A NEW TASK AND ADD INTO LOCAL STORAGE
export function addTask(task) {
  const task1 = newTask(
    task.title,
    task.duedate,
    task.priority,
    task.notes,
    task.status
  );

  const json = JSON.stringify(task1);
  localStorage.setItem("task", json);
}
