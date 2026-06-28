tasks = [];

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
          </div>
        </div>
        `
  })

  console.log(tasks)
}

function checkTask(){
  const checkBox = document.querySelector("check");
  console.log(checkBox)

  if (checkBox.checked){
    task.textDecoration = "line-through ";
  }

}

checkTask()

