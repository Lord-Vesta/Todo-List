const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

// addBtn.addEventListener("click", function () {
//   console.log(displayCount);
// });

// console.log(countValue.textContent);

// console.log(newTaskInput);

let taskCount = 0;

const displayCount = (taskCount) => {

  countValue.innerHTML = taskCount;
};

const addTask = () => {
  console.log("into addtask");
  const taskName = newTaskInput.value.trim();
  console.log(taskName);
  error.style.display = "none";

  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 2000);
    return;
  }

  const task = `<div class = "task">
    <input type = "checkbox" class = "task-check">
    <span class = "taskname" > ${taskName}</span>
    <button class = 'edit'>
        edit
    </button>
    <button class = 'delete'>
        delete
    </button>
    </div>`;

  taskContainer.insertAdjacentHTML("beforeend", task);

  taskCount++;
  displayCount(taskCount)
  
};

addBtn.addEventListener("click", addTask);
