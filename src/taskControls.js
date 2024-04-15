import { addNewTaskUi, addTask, getFormData, allTasks } from "./task";

// VIEW TASK //////////////
export function ViewTask(targetTask) {
  const task = allTasks.find((task) => task.id === targetTask.dataset.id);
  const viewModal = document.querySelector(".view-modal");
  viewModal.insertAdjacentHTML(
    "beforeend",
    `<div class='view-task'>
      <button class="close-view">×</button>
      <h2>Project: ${task.category}</h2>
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
  const index = allTasks.findIndex((task) => task.id === targetTask.dataset.id);
  allTasks.splice(index, 1);
  localStorage.setItem("allTasks", JSON.stringify(allTasks));
  // remove form ui
  targetTask.remove();
}
//////////////////////////////////////////////////

// ADD NEW TASK TO LOCAL STORAGE ///////////////
export function addNewTaskToLocalStorage(form, modal, div, project = "All") {
  const newTask = getFormData(form);
  addTask(newTask, project);
  modal.close();
  form.reset();
  addNewTaskUi(div);
}
///////////////////////////////////////////////

// CHECK TASK DONE /////////////
export function checkTask(targetTask) {
  const modifiedallTasks = allTasks.map((task) => {
    if (task.id === targetTask.dataset.id) {
      return { ...task, status: "done" };
    }
    return task;
  });
  allTasks = modifiedallTasks;
  localStorage.setItem("allTasks", JSON.stringify(modifiedallTasks));
}

// UNCHECK TASK ///////////////////
export function uncheckTask(targetTask) {
  const modifiedallTasks = allTasks.map((task) => {
    if (task.id === targetTask.dataset.id) {
      return { ...task, status: "in-progress" };
    }
    return task;
  });
  allTasks = modifiedallTasks;
  localStorage.setItem("allTasks", JSON.stringify(modifiedallTasks));
}
/////////////////////////////////////////

// CLOSE MODALS ///////////////
export function closeModals() {
  const taskModal = document.querySelector(".task-modal");
  const viewModal = document.querySelector(".view-modal");
  const projectModal = document.querySelector(".project-modal");

  taskModal.close();
  viewModal.close();
  projectModal.close();
  viewModal.textContent = "";
  projectModal.textContent = "";
}
///////////////////////////////////////////////////

// CLEAR PAGE //////////////
export function clearPage(div) {
  div.innerHTML = "";
}
