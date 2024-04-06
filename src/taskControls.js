import { addNewTaskUi, addTask, getFormData, allTasks } from "./task";

// VIEW TASK //////////////
export function ViewTask(targetTask) {
  const task = JSON.parse(localStorage.getItem(targetTask.dataset.id));
  const viewModal = document.querySelector(".view-modal");
  viewModal.insertAdjacentHTML(
    "beforeend",
    `<div class='view-task'>
      <button class="close-view">×</button>
      <h2>${task.title}</h2>
      <p>Due date: ${task.dueDate}</p>
      <p>priority <button class="${task.priority}">${task.priority}</button></p>
      <p>status <button class="${task.status}">${task.status}</button></p>
      <p>notes: ${task.notes}</p>
    </div>
  `
  );
  viewModal.showModal();
}
////////////////////////////////////////////////

// DELETING A TASK FROM LOCAL STORAGE, ALL TASKS ARRAY, AND UI /////////////
export function deleteTask(targetTask) {
  // remove from localstorage
  localStorage.removeItem(targetTask.dataset.id);
  // remove form alltasks
  const index = allTasks.findIndex(
    (task) => task.title === targetTask.dataset.id
  );
  allTasks.splice(index, 1);
  // remove form ui
  targetTask.remove();
}
//////////////////////////////////////////////////

// ADD NEW TASK TO LOCAL STORAGE ///////////////
export function addNewTaskToLocalStorage(form, modal, div) {
  const newTask = getFormData(form);
  addTask(newTask);
  modal.close();
  form.reset();
  addNewTaskUi(div);
}
///////////////////////////////////////////////

// CLOSE MODALS ///////////////
export function closeModals() {
  const taskModal = document.querySelector(".task-modal");
  const viewModal = document.querySelector(".view-modal");
  const projectModal = document.querySelector(".project-modal");

  taskModal.close();
  viewModal.close();
  projectModal.close();
  viewModal.textContent = "";
}

// CLEAR PAGE //////////////
export function clearPage(div) {
  div.innerHTML = "";
}
