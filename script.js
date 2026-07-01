let tasks;

const savedData = localStorage.getItem("taskList");

if (savedData !== null){
   tasks = JSON.parse(savedData);
   console.log(tasks)
}

else{
  tasks = [];
}


const taskDisplay = document.querySelector(".display-task");

function manageTask() {
  const inputElement = document.getElementById("task");
  const taskInput = inputElement.value;
  inputElement.value = "";
  const taskButton = document.querySelector(".add-button");



  // add task

  taskDisplay.innerHTML = ``

  taskDisplay.append();

  if (taskInput === "" || taskInput === " ") {
    alert("Can't add empty task");
  }

  else {
    tasks.push(taskInput);
    localStorage.setItem("taskList", JSON.stringify(tasks));
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

  //check task
  taskDisplay.addEventListener("change", (taskChecked) => {

    const checkBox = taskChecked.target
    console.log(checkBox)

    const taskLabelCheck = checkBox.nextElementSibling;

    if (checkBox.classList.contains("check")) {
      taskLabelCheck.style.textDecoration = "line-through";
      taskLabelCheck.style.color = "rgba(19, 18, 18, 0.69)";
      

    }

  })

  // delete task
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      const deleteTask = event.target.parentNode;

      const taskLabelDelete = deleteTask.querySelector(".task");

      const taskTekst = taskLabelDelete.innerText.trim();
      const index = tasks.indexOf(taskTekst);

      if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(tasks));
        console.log("true");
        
      }

      deleteTask.remove();

      console.log("task deleted");
      console.log(tasks);

    })
  })

}









