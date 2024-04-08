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
function newProject(name, tasks) {
  const project = {};
  project.name = name;
  project.tasks = tasks;

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
      <input type="text" name="project" id="p-name" required/>
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
  const newProjectTask = document.createElement("button");
  newProjectTask.classList.add("btn-project-task");
  newProjectTask.textContent = "+task";

  projectDiv.append(btnDeleteProject, projectTitle, newProjectTask);
  div.append(projectDiv);

  const project = newProject(projectTitle.textContent, []);
  allProjects.push(project);
  console.log(allProjects);
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
  <button class='btn-project-task'>
  +Add new task
  </button>
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
//  ADD TASK TO PROJECT ///////
export function addTaskToProject(task) {
  if (task.category !== "All") {
    const project = allProjects.findIndex(
      (project) => project.name === task.category
    );
    allProjects[project].push(task);
  }
}
