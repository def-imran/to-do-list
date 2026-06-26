tasks = [];

function addTask() {
  const inputElement = document.getElementById("task");
  const taskInput = inputElement.value;
  inputElement.value = "";
  const taskButton = document.querySelector(".add-button");

  const taskDisplay = document.querySelector(".display-task");


  tasks.push(taskInput);
  taskDisplay.innerHTML=``

  tasks.forEach((task) => {
    taskDisplay.innerHTML += `
         <div class="display-task">
          <div class="display-div">
            <input type="checkbox" name="task">
            <label for="task">${task}</label>
          </div>
        </div>
        `
  })



  console.log(tasks)

}

