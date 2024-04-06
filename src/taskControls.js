import { addNewTaskUi, addTask, getFormData } from "./task";

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

// DELETING A TASK FROM LOCAL STORAGE AND THE UI /////////////
export function deleteTask(targetTask) {
  localStorage.removeItem(targetTask.dataset.id);
  targetTask.remove();
}
//////////////////////////////////////////////////

// ADD NEW TASK TO LOCAL STORAGE ///////////////
export function addNewTaskToLocalStorage(form, modal) {
  const newTask = getFormData(form);
  addTask(newTask);
  modal.close();
  form.reset();
  addNewTaskUi();
}
///////////////////////////////////////////////
