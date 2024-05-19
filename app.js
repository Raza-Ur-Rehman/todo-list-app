let inputs = document.getElementById("userinput");
let todoList = document.getElementById("list");
// let date = newDate();

function addTask () {
  if (inputs.value === "") {
    alert("Please Enter a Task");
    
  } else {
    let liElement = document.createElement ("li");
    let pElement = document.createElement ("p");
    pElement.className = 'checkmark'
    pElement.innerHTML = inputs.value;
    pElement.style.background = "none";
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
    deletebtn.setAttribute("onclick","deleteTask(this)");

    // final adding listitem in todolist 
    todoList.appendChild(liElement);
    inputs.value = "";








    // console.log(deletebtn);
    
    
    
  }
}



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
