import { format } from "date-fns";

export const allTasks = [];

// FACTORY FUNCTION TO CREATE A NEW TASK ///////////////////
export function newTask(
  title,
  dueDate = new Date(),
  priority,
  notes = "",
  status
) {
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
    <button class="btn-close-modal">✖️</button>
  <form action="#" class="task-form">
        <h2>New Task</h2>
        <div class='div1'> 
          <label for="title"><h3>Title</h3></label>
          <input type="text" id="title" required />
             <label for="date"><h3>Due date</h3></label>
          <input type="date" id="date" required />
        </div>
        <div class='priority'>
          <h3>Priority</h3>
          <button id="low" class="btn-priority">Low</button>
          <button id="med" class="btn-priority">Medium</button>
          <button id="high" class="btn-priority">High</button>
        </div>
        <div>
          <label for="notes"><h3>Notes</h3></label>
          <textarea name="notes" id="notes" cols="20" rows="4"></textarea>
        </div>
        <div>
          <h3>Status</h3>
          <button id="not" class="btn-status">Not started</button>
          <button id="done" class="btn-status">Done!</button>
        </div>
        <button type="submit" class="btn-add">Add task</button>
      </form>
  `
  );
  modal.showModal();
}

export function addTask(task, board) {
  board.insertAdjacentHTML(
    "beforeend",
    `
 <div class="task">
          <h3>${task.title}</h3>
          <p>${task.dueDate}</p>
          <button class='icon'>📝</button>
          <button class='icon'>🗑️</button>
        </div>
`
  );
}
