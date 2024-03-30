// EDIT TASK //////
export function editTask(e) {
  const target = e.target.closest(".edit");
  const targetTask = e.target.closest(".task");

  if (target) {
    // get the target task from lacal storage
    const key = targetTask.dataset.id;
    const task = localStorage.getItem(key);
    console.log(task);
  }
}

// DELETING A TASK FROM LOCAL STORAGE AND THE UI
export function deleteTask(e) {
  const target = e.target.closest(".delete");
  const targetTask = e.target.closest(".task");

  if (target) {
    localStorage.removeItem(targetTask.dataset.id);
    targetTask.remove();
  }
}
