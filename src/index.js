import "./style.css";
import { addTasksToUI } from "./task";
import { deleteTask, ViewTask, addNewTaskToLocalStorage } from "./taskControls";

const board = document.querySelector(".task-board");
const modal = document.querySelector(".task-modal");
const divAllTasks = document.querySelector(".alltasks");

// ADDING ELEMENTS TO DEFAULT PAGE ////////////////////
function defaultPage() {
  // button to add new task
  const btnNewTask = document.createElement("btn");
  btnNewTask.textContent = "+Add new task";
  btnNewTask.classList.add("btn-new");
  board.prepend(btnNewTask);

  // heading
  const allTasksTitle = document.createElement("h1");
  allTasksTitle.textContent = "All Tasks";
  allTasksTitle.classList.add("title-alltasks");
  board.prepend(allTasksTitle);

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
    const targetClose = e.target.closest(".btn-close-modal");
    const targetAdd = e.target.closest(".btn-add");
    const form = e.target.closest(".task-form");
    const closeView = e.target.closest(".close-view");

    // close form
    if (targetClose) {
      modal.close();
      form.reset();
    }
    // add task to local storage
    if (targetAdd && form.checkValidity()) {
      e.preventDefault();
      addNewTaskToLocalStorage(form, modal);
    }

    // CLOSE TASK VIEW ////////////////
    const viewModal = document.querySelector(".view-modal");
    if (closeView) {
      viewModal.close();
      viewModal.textContent = "";
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
