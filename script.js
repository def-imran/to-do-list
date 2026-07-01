let tasks = [];


const savedData = localStorage.getItem("taskList");
const savedDataLabel = localStorage.getItem("taskLabel");

if (savedData !== null) {
  tasks = JSON.parse(savedData);
  console.log(tasks)
}

else {
  tasks = [];
}

const taskDisplay = document.querySelector(".display-task");


function displayTask() {
  taskDisplay.innerHTML = ``

  tasks.forEach((task) => {
    taskDisplay.innerHTML += `
        <div class="display-task">
          <div class="display-div">
            <input type="checkbox" name="task" class="check">
            <label for="task" class="task">${task}</label>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
        `

  })

  console.log(tasks)

  // delete task
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      const deleteElement = event.target.parentNode;
      deleteTask(deleteElement);
      

    })
  })
}



function addTask() {
  const inputElement = document.getElementById("task");
  const taskInput = inputElement.value;
  inputElement.value = "";
  const taskButton = document.querySelector(".add-button");

  // add task

  if (taskInput === "" || taskInput === " ") {
    alert("Can't add empty task");
  }

  else {
    tasks.push(taskInput);
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }

displayTask();
}


//check task
  taskDisplay.addEventListener("change", (taskChecked) => {

    const checkBox = taskChecked.target
    checkTask(checkBox);
  })

function checkTask(checkBox) {
  const taskLabelCheck = checkBox.nextElementSibling;

  if (checkBox.classList.contains("check")) {
    taskLabelCheck.style.textDecoration = "line-through";
    taskLabelCheck.style.color = "rgba(19, 18, 18, 0.69)";
    localStorage.setItem("taskLabel", JSON.stringify(taskLabelCheck));


  }

  console.log(checkBox)
}


function deleteTask(deleteElement) {
  const taskLabelDelete = deleteElement.querySelector(".task");

  const taskTekst = taskLabelDelete.innerText.trim();
  const index = tasks.indexOf(taskTekst);

  if (index !== -1) {
    tasks.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tasks));
    console.log("true");

  }

  deleteElement.remove();

  console.log("task deleted");
  console.log(tasks);

}


displayTask();



