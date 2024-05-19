let inputs = document.getElementById("userinput");
let todoList = document.getElementById("task");
// let date = newDate();

function addTask() {
  if (inputs.value === "") {
    alert("Please Enter a Task");
  } else {
    let liElement = document.createElement("li");
    let checkboxinput = document.createElement("input");
    let pElement = document.createElement("p");
    checkboxinput.type = "checkbox";
    pElement.className = "checkmark";
    pElement.innerHTML = inputs.value;
    pElement.style.background = "none";
    liElement.appendChild(checkboxinput);
    liElement.appendChild(pElement);
    //  create  Edit icon
    let editbtn = document.createElement("i");
    editbtn.classList.add("fa-solid", "fa-pen", "editbtn");
    liElement.appendChild(editbtn);
    editbtn.setAttribute("onclick", "updateTask(this)");
    //  create Delete btn
    let deletebtn = document.createElement("i");
    deletebtn.classList.add("fa-solid", "fa-trash", "deletebtn");
    liElement.appendChild(deletebtn);
    deletebtn.setAttribute("onclick", "deleteTask(this)");
    // final adding listitem in todolist
    todoList.appendChild(liElement);
    inputs.value = "";
  }
}
