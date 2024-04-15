import {
  addNewTaskUi,
  addTask,
  getFormData,
  allTasks,
  makeTasksElements,
} from "./task";

// VIEW TASK //////////////
export function ViewTask(targetTask) {
  const task = allTasks.find((task) => task.id === targetTask.dataset.id);
  const viewModal = document.querySelector(".view-modal");
  viewModal.insertAdjacentHTML(
    "beforeend",
    `<div class='view-task'>
      <button class="close-view">×</button>
      <h2>${task.title}</h2>
      <p>Project: ${task.category}<p>
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

// COMPLETED TASKS PAGE /////////////////////
export function goToCompletedTasksPage(div) {
  const completedTasks = allTasks.filter((task) => {
    return task.status === "done";
  });
  const completedTasksTilte = document.createElement("h1");
  completedTasksTilte.textContent = "Completed Tasks";
  completedTasksTilte.classList.add("title-completedtasks");
  div.append(completedTasksTilte);

  makeTasksElements(div, completedTasks);
}

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
