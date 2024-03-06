import "./style.css";
import { allTasks, newTask, addTask, taskForm } from "./task";

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
    const target = e.target.closest(".btn-close-modal");
    if (target) {
      modal.textContent = "";
      modal.close();
    }
  });
};
