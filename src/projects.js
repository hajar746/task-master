import { allTasks } from "./task";
const modal = document.querySelector(".task-modal");

let allProjects = [];
const allProjectsTitle = document.createElement("h1");

// ALL PROJECTS PAGE ///////////////
export function allProjectsPage(div) {
  allProjectsTitle.textContent = "All Projects";
  allProjectsTitle.classList.add("title-allprojects");

  const addNewProjectBtn = document.createElement("btn");
  addNewProjectBtn.textContent = "+Add new project";
  addNewProjectBtn.classList.add("btn-new");
  div.append(allProjectsTitle, addNewProjectBtn);

  addNewProjectBtn.addEventListener("click", () => {
    newProjectForm();
  });
}

// CREATE A NEW PROJECT ///////
function newProject(name) {
  const project = {};
  project.name = name;

  return project;
}

// NEW PROJECT FORM ///////////
function newProjectForm() {
  const projectModal = document.querySelector(".project-modal");
  const div = document.createElement("div");
  div.insertAdjacentHTML(
    "beforeend",
    `
     <form action="#" method="dialog" class="newproject">
        <button class="close-view" type='reset'>×</button>
      <h2>New Project</h2>
      <label for="p-name">Enter project name:</label>
      <input type="text" name="project" id="p-name"/>
      <button class="btn-add-project">Add</button>
    </form>
    `
  );
  projectModal.append(div);
  projectModal.showModal();
}

// ADD NEW PROJECT TO UI AND ALLPROJECTS ARRAY/////////
export function addNewProject(name, div) {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  projectDiv.dataset.name = name;
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = name;
  projectTitle.classList.add("project-name");
  const btnDeleteProject = document.createElement("img");
  btnDeleteProject.src = "/src/recycle-bin.png";
  btnDeleteProject.classList.add("delete-project");
  btnDeleteProject.classList.add("icon");

  projectDiv.append(btnDeleteProject, projectTitle);
  div.append(projectDiv);

  const project = newProject(projectTitle.textContent);
  allProjects.push(project);
  addProjectsLocalStorage();
}

// RETRIEVE PROJECTS FROM LOCAL STORAGE AND ADD TO UI ///////////////
export function addProjectsUi(div) {
  if (localStorage.getItem("allProjects")) {
    const json = localStorage.getItem("allProjects");
    const projectsFromLS = JSON.parse(json);
    allProjects = projectsFromLS;

    for (const project of allProjects) {
      div.insertAdjacentHTML(
        "beforeend",
        `
  <div class='project' data-name='${project.name}'>
  <img class='icon delete-project' src="/src/recycle-bin.png" alt="delete task">
  <h3 class='project-name'>${project.name}</h3>
  </div>
  `
      );
    }
  }
  addProjectsLocalStorage();
}

// UPDATE PROJECTS ARRAY IN LOCAL STORAGE //////////
function addProjectsLocalStorage() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

// DELETE PROJECT //////
export function deleteProject(targetProject) {
  const index = allProjects.findIndex(
    (project) => project.name === targetProject.dataset.name
  );
  allProjects.splice(index, 1);
  addProjectsLocalStorage();
  // remove form ui
  targetProject.remove();
}

// GO TO A PROJECT /////
export function goToProject(targetProject, div) {
  const projectTasks = allTasks.filter((task) => {
    return task.category === targetProject.dataset.name;
  });
  // page elements
  const btnBackToAllProjects = document.createElement("button");
  btnBackToAllProjects.textContent = "⇐ Back to all projects";
  btnBackToAllProjects.classList.add("btn-back");
  const projectTitle = document.createElement("h1");
  projectTitle.textContent = targetProject.dataset.name;
  projectTitle.dataset.name = targetProject.dataset.name;
  projectTitle.classList.add("title-project");
  const btnNewProjectTask = document.createElement("btn");
  btnNewProjectTask.textContent = "+Add new task";
  btnNewProjectTask.classList.add("btn-new");
  div.prepend(btnBackToAllProjects, projectTitle, btnNewProjectTask);

  btnNewProjectTask.addEventListener("click", () => {
    modal.showModal();
  });
  // add project tasks

  for (const task of projectTasks) {
    div.insertAdjacentHTML(
      "beforeend",
      `
      <div class="task ui-${task.priority}" data-id='${task.id}'>
      <div class='task-info'>
        <div class='task-title'>
          <input type="checkbox" name="status" value="done" id='ui-${task.id}' class='task-done-${task.id}'/>
          <label for="ui-${task.id}" class='task-done-title'>${task.title}</label>
        </div>
        <div class="options">
         <p class='ui-status ui-${task.status}'>${task.status}</p>
          <p>${task.dueDate}</p>
          <img class='icon view' src="/src/view.png" alt="edit/view task">
          <img class='icon delete' src="/src/recycle-bin.png" alt="delete task">
        </div>
      </div>
        <p class='task-notes'>${task.notes}</p>
      </div>
    `
    );
    const checkbox = document.querySelector(`.task-done-${task.id}`);
    if (task.status === "done") {
      checkbox.checked = true;
    }
  }
}
