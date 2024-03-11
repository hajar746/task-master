import "./style.css";
import { allTasks, getFormData, taskForm, addTask } from "./task";

const board = document.querySelector(".task-board");
const modal = document.querySelector("dialog");

// ADDING ELEMENTS TO DEFAULT PAGE
function defaultPage() {
  // heading
  const allTasksTitle = document.createElement("h1");
  allTasksTitle.textContent = "All Tasks";
  allTasksTitle.classList.add("title-alltasks");
  board.appendChild(allTasksTitle);

  // button to add new task
  const btnNewTask = document.createElement("btn");
  btnNewTask.textContent = "+Add new task";
  btnNewTask.classList.add("btn-new");
  board.appendChild(btnNewTask);

  btnNewTask.addEventListener("click", function () {
    taskForm();
  });
}

window.onload = () => {
  defaultPage();

  document.addEventListener("click", function (e) {
    const targetClose = e.target.closest(".btn-close-modal");
    const targetAdd = e.target.closest(".btn-add");
    const form = e.target.closest(".task-form");

    // close form
    if (targetClose) {
      modal.textContent = "";
      modal.close();
    }
    // add task to local storage
    if (targetAdd && form.checkValidity()) {
      e.preventDefault();
      const task1 = getFormData(form);
      addTask(task1);
      modal.textContent = "";
      modal.close();
    }
  });
};
