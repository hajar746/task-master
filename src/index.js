import {
  allProjectsPage,
  addNewProject,
  addProjectsUi,
  deleteProject,
  goToProject,
} from "./projects";
import "./style.css";
import { addTasksToUI } from "./task";
import {
  deleteTask,
  ViewTask,
  addNewTaskToLocalStorage,
  clearPage,
  closeModals,
  checkTask,
  uncheckTask,
} from "./taskControls";

const modal = document.querySelector(".task-modal");
const taskDivs = document.querySelectorAll(".container");
const divAllTasks = document.querySelector(".div-alltasks");
const divAllProjects = document.querySelector(".div-allprojects");
const divProject = document.querySelector(".div-project");
const btnAllProjects = document.querySelector(".all-projects");
const btnAllTasks = document.querySelector(".all-tasks");
let tasksPage = false;
let projectsPage = false;
let singleProjectPage = false;

// ADDING ELEMENTS TO DEFAULT PAGE ////////////////////
function defaultPage() {
  tasksPage = true;
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

  //ADDING TASKS AND PROJECTS ////////////////////////////////////
  document.addEventListener("click", function (e) {
    const targetAdd = e.target.closest(".btn-add");
    const taskForm = e.target.closest(".task-form");
    const btnAddProject = e.target.closest(".btn-add-project");
    const projectForm = e.target.closest(".newproject");
    const projectName = document.getElementById("p-name");
    const closeView = e.target.closest(".close-view");
    const project = e.target.closest(".project");
    const btnBackToAllProjects = e.target.closest(".btn-back");

    // add a new task to local storage & UI
    if (targetAdd && taskForm.checkValidity() && tasksPage) {
      e.preventDefault();
      addNewTaskToLocalStorage(taskForm, modal, divAllTasks);
    }
    // close modals
    if (closeView) {
      closeModals();
    }
    // add a new project to local storage & UI
    if (btnAddProject && projectForm.checkValidity()) {
      e.preventDefault();
      addNewProject(projectName.value, divAllProjects);
      closeModals();
    }
    // go to a project task page
    if (project) {
      clearPage(divAllProjects);
      goToProject(project, divProject);
      projectsPage = false;
      singleProjectPage = true;
    }
    // add a task to a project
    if (targetAdd && taskForm.checkValidity() && singleProjectPage === true) {
      const category = document.querySelector(".title-project");
      e.preventDefault();
      addNewTaskToLocalStorage(
        taskForm,
        modal,
        divProject,
        category.textContent
      );
    }
    // go back to all projects page
    if (btnBackToAllProjects) {
      goToAllProjects();
    }
  });
  ///////////////////////////////////////////////////////////////////////

  // DELETE TASK / VIEW TASK / CHECK A TASK AS DONE ////////////////////
  taskDivs.forEach(function (div) {
    div.addEventListener("click", (e) => {
      const targetTask = e.target.closest(".task");
      const btnView = e.target.closest(".view");
      const btndelete = e.target.closest(".delete");
      const btnTaskDone = e.target.closest(
        `.task-done-${targetTask.dataset.id}`
      );

      if (btnView) ViewTask(targetTask);
      if (btndelete) deleteTask(targetTask);
      if (btnTaskDone && btnTaskDone.checked) {
        checkTask(targetTask);
        reloadDiv(div);
      }
      if (btnTaskDone && !btnTaskDone.checked) {
        uncheckTask(targetTask);
        reloadDiv(div);
      }
    });
  });
  //////////////////////////////////////////////////////////////////////

  // DELETING A PROJECT //////////////////////////////////////
  divAllProjects.addEventListener("click", function (e) {
    const targetProject = e.target.closest(".project");
    const btnDeleteProject = e.target.closest(".delete-project");
    if (btnDeleteProject) deleteProject(targetProject);
  });
};

// GO TO ALL TASKS PAGE /////////////////////////////////////////
btnAllTasks.addEventListener("click", function () {
  if (divAllTasks.innerHTML !== "" && tasksPage === true) return;
  clearPage(divAllProjects);
  clearPage(divProject);
  defaultPage();
  addTasksToUI(divAllTasks);
  tasksPage = true;
  projectsPage = false;
  singleProjectPage = false;
});

// GO TO ALL PROJECTS PAGE ///////////////////////////////////
btnAllProjects.addEventListener("click", function () {
  if (divAllProjects.innerHTML !== "" && projectsPage === true) return;
  goToAllProjects();
});

// FUNCTION TO GO TO ALL PROJECTS PAGE //////////
function goToAllProjects() {
  clearPage(divAllTasks);
  clearPage(divProject);
  allProjectsPage(divAllProjects);
  addProjectsUi(divAllProjects);
  projectsPage = true;
  tasksPage = false;
  singleProjectPage = false;
}
//////////////////////////////////////////////

// FUNCTION TO RELOAD DIV AFTER TASK IS CHECKED/UNCHECKED (TO UPDATE STATUS) ///////////
function reloadDiv(div) {
  if (div.classList.contains("div-alltasks")) {
    clearPage(div);
    defaultPage();
    addTasksToUI(div);
  }
  if (div.classList.contains("div-project")) {
    const title = document.querySelector(".title-project");
    clearPage(divProject);
    goToProject(title, div);
  }
}
