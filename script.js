const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const taskContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector("#countTasks");

let taskCount = 0;

// function to display the number of tasks
const displayCount = (taskCount) => {
  countValue.innerHTML = taskCount;
};


// function which runs after addidng elements
const addTask = () => {
  const taskName = newTaskInput.value.trim();
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
  displayCount(taskCount);


//   to delete a task
  const deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      taskCount--;
      displayCount(taskCount);
    };
  });


// to edit a task
  let editButton = document.querySelectorAll(".edit");

  editButton.forEach((button) => {
    button.onclick = (e) => {
      let targetElement = e.target;

      if (!(e.target.className == "edit")) {
        targetElement = e.target.parentElement;
      }

      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
      taskCount--;
      displayCount(taskCount);
    };
  });


//  to check if task is completed
  const taskCheck = document.querySelectorAll(".task-check");

  taskCheck.forEach((checkbox) => {
    checkbox.onclick = () => {
      checkbox.nextElementSibling.classList.toggle("completed");
      if (checkbox.checked) {
        taskCount--;
      } else {
        taskCount++;
      }

      displayCount(taskCount);
    };
  });

  newTaskInput.value = "";
  saveData();

  //   console.log(countValue.textContent);
};

addBtn.addEventListener("click", addTask);

// let y = document.querySelectorAll(".yashh");
// y.forEach((button) => {
//   button.onclick = (e) => {
//     console.log(e.target.id);
//   };
// });

function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
  localStorage.setItem("count", countTasks.textContent);
}

function showData() {
  tasks.innerHTML = localStorage.getItem("data");
  countTasks.textContent = localStorage.getItem("count");
}

taskCount = localStorage.getItem("count");
showData();
