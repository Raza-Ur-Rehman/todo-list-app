let userInput = document.querySelector("#userinput");
let userTask = document.querySelector("#user-task");
function addtask() {
  if (userInput.value == "") {
    alert("Please Enter a Task");
  } else {
    let liElement = document.createElement("li");
    let newTaskP = document.createElement("p");
    newTaskP.innerHTML = userInput.value;
    newTaskP.style.background = "none";
    liElement.appendChild(newTaskP);

    let editbtn = document.createElement("editbtn");
    editbtn.classList.add("fa-solid", "fa-pen-to-square", "edit");
    liElement.appendChild(editbtn);
    editbtn.setAttribute("onclick", "updateTask(this)");
  }
}

console.log(editbtn.classList.add());

// let inputs = document.getElementById("inputbox");
// let todoList = document.getElementById("list-text");

// function add() {
//   // if input is equal to null means no text then show alert
//   if (inputs.value == "") {
//     alert("Please enter a task");
//   } else {
//     // Created list
//     let liElement = document.createElement("li");
//     // This code create paragraph
//     let newElementP = document.getElementById("task");
//     // inside paragraph getting the value of inputs
//     newElementP.innerHTML = inputs.value;
//     newElementP.style.background = "none";
//     // this code will add paragraph inside list
//     liElement.appendChild(newElementP);

//     // Created editIcon
//     let editbtn = document.createElement("icons");
//     editbtn.classList.add("fa-solid", "fa-pen-to-square", "edit");
//     liElement.appendChild(editbtn);
//     editbtn.setAttribute("onclick", "updateTask(this)");

//     // Created deleteIcon
//     let deletebtn = document.createElement("icon");
//     deletebtn.classList.add("fa-solid", "fa-trash", "delete");
//     liElement.appendChild(deletebtn);
//     deletebtn.setAttribute("onclick", "deleteTask(this)");

//     // finaally adding listItem in todoList:
//     todoList.appendChild(liElement);
//     inputs.value = "";
//   }
// }

// // created deleteFunction to delete todolist target element
// function deleteTask(e) {
//     e.parentNode.remove()
// }

// // created updateFunction to update todolist target element
// function updateTask(e) {
//     let currentElementText = e.previousElementSibling.textContent;
//     let currentInput = document.createElement("input");
//     currentInput.type = "text";
//     currentInput.className = 'input';
//     e.value = currentElementText;
//     e.parentNode.replaceChild(currentInput,e.previousElementSibling,)
//     e.style.margin = "20px"

// }
