function addTask(){
    const inputElement = document.getElementById("task");
    const taskInput = inputElement.value;
    inputElement.value="";
    const taskButton = document.querySelector(".add-button");

    const taskDisplay = document.querySelector(".display-task");

    tasks = [];

    tasks.push(taskInput);

    
    console.log(tasks)
}