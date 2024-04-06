import { allProjectsPage, addProjectUi } from "./projects";
import "./style.css";
import { addTasksToUI } from "./task";
import {
  deleteTask,
  ViewTask,
  addNewTaskToLocalStorage,
  clearPage,
  closeModals,
} from "./taskControls";

const modal = document.querySelector(".task-modal");
const divAllTasks = document.querySelector(".div-alltasks");
const divAllProjects = document.querySelector(".div-allprojects");
const btnAllProjects = document.querySelector(".all-projects");
const btnAllTasks = document.querySelector(".all-tasks");

// ADDING ELEMENTS TO DEFAULT PAGE ////////////////////
function defaultPage() {
  // button to add new task
  const btnNewTask = document.createElement("btn");
  btnNewTask.textContent = "+Add new task";
  btnNewTask.classList.add("btn-new");
  divAllTasks.prepend(btnNewTask);

  // heading
  const allTasksTitle = document.createElement("h1");
  allTasksTitle.textContent = "All Tasks";
  allTasksTitle.classList.add("title-alltasks");
  divAllTasks.prepend(allTasksTitle);

  btnNewTask.addEventListener("click", function () {
    modal.showModal();
  });
}
//////////////////////////////////////////////////

window.onload = () => {
  defaultPage();
  addTasksToUI(divAllTasks);

  // OPENING/CLOSING FORM AND ADDING TASK TO LOCAL STORAGE//////////////
  document.addEventListener("click", function (e) {
    const targetAdd = e.target.closest(".btn-add");
    const taskForm = e.target.closest(".task-form");
    const btnAddProject = e.target.closest(".btn-add-project");
    const projectForm = e.target.closest(".newproject");
    const projectName = document.getElementById("p-name");
    const closeView = e.target.closest(".close-view");

    // add task to local storage
    if (targetAdd && form.checkValidity()) {
      e.preventDefault();
      addNewTaskToLocalStorage(taskForm, modal, divAllTasks);
    }
    // close modals
    if (closeView) {
      closeModals();
    }
    if (btnAddProject && projectForm.checkValidity()) {
      e.preventDefault();
      addProjectUi(projectName.value, divAllProjects);
      closeModals();
    }
  });

  // DELETE TASK / VIEW TASK////////////////////
  divAllTasks.addEventListener("click", function (e) {
    const targetTask = e.target.closest(".task");
    const btnView = e.target.closest(".view");
    const btndelete = e.target.closest(".delete");

    if (btnView) ViewTask(targetTask);
    if (btndelete) deleteTask(targetTask);
  });
};

// GO TO ALL TASKS PAGE ///////////////////
btnAllTasks.addEventListener("click", function () {
  if (divAllTasks.innerHTML !== "") return;
  clearPage(divAllProjects);
  defaultPage();
  addTasksToUI(divAllTasks);
});

// GO TO ALL PROJECTS PAGE ////////////////
btnAllProjects.addEventListener("click", function () {
  if (divAllProjects.innerHTML !== "") return;
  clearPage(divAllTasks);
  allProjectsPage(divAllProjects);
});
