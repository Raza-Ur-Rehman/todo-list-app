let inputs = document.getElementById("userinput");
let todoList = document.getElementById("task");

function addtask() {
  if (inputs.value === "") {
    alert("Please Enter a Task");
  } else {
    let date = new Date().toLocaleString();
    console.log(date);
  }
}
