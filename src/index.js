import { tr } from "date-fns/locale";
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

  // OPENING/CLOSING FORM AND ADDING TASK TO LOCAL STORAGE//////////////
  document.addEventListener("click", function (e) {
    const targetAdd = e.target.closest(".btn-add");
    const taskForm = e.target.closest(".task-form");
    const btnAddProject = e.target.closest(".btn-add-project");
    const projectForm = e.target.closest(".newproject");
    const projectName = document.getElementById("p-name");
    const closeView = e.target.closest(".close-view");
    const project = e.target.closest(".project");

    // add task to local storage
    if (targetAdd && taskForm.checkValidity() && tasksPage) {
      e.preventDefault();
      addNewTaskToLocalStorage(taskForm, modal, divAllTasks);
    }
    // close modals
    if (closeView) {
      closeModals();
    }
    if (btnAddProject && projectForm.checkValidity()) {
      e.preventDefault();
      addNewProject(projectName.value, divAllProjects);
      closeModals();
    }
    if (project) {
      clearPage(divAllProjects);
      goToProject(project, divProject);
      projectsPage = false;
      singleProjectPage = true;
    }
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
  });

  // DELETE TASK / VIEW TASK / CHECK A TASK AS DONE ////////////////////
  divAllTasks.addEventListener("click", function (e) {
    const targetTask = e.target.closest(".task");
    const btnView = e.target.closest(".view");
    const btndelete = e.target.closest(".delete");
    const btnTaskDone = e.target.closest(`.task-done-${targetTask.dataset.id}`);

    if (btnView) ViewTask(targetTask);
    if (btndelete) deleteTask(targetTask);
    if (btnTaskDone && btnTaskDone.checked) checkTask(targetTask);
    if (btnTaskDone && !btnTaskDone.checked) uncheckTask(targetTask);
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
  clearPage(divAllTasks);
  clearPage(divProject);
  allProjectsPage(divAllProjects);
  addProjectsUi(divAllProjects);
  projectsPage = true;
  tasksPage = false;
  singleProjectPage = false;
});
