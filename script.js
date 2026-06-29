let tasks = [];

function addTask() {
  const inputElement = document.getElementById("task");
  const taskInput = inputElement.value;
  inputElement.value = "";
  const taskButton = document.querySelector(".add-button");

  const taskDisplay = document.querySelector(".display-task");

  taskDisplay.innerHTML = ``

  if (taskInput === "" || taskInput === " ") {
    alert("Can't add empty task");
  }

  else {
    tasks.push(taskInput);

  }

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

  taskDisplay.addEventListener("change", (taskChecked) => {

    const checkBox = taskChecked.target
    console.log(checkBox)

    const taskLabel = checkBox.nextElementSibling;

    if (checkBox.classList.contains("check")) {
      taskLabel.style.textDecoration = "line-through";
      taskLabel.style.color = "rgba(19, 18, 18, 0.69)"

    }

  })
}






