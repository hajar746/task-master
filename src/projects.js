const allProjects = [];
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
      <input type="text" name="project" id="p-name" />
      <button class="btn-add-project">Add</button>
    </form>
    `
  );
  projectModal.append(div);
  projectModal.showModal();
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
