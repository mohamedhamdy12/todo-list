/*start to do list*/

let todoText = document.querySelector(".todo-text")
let add = document.querySelector(".add")
let todoList = document.querySelector(".todo-list")
let mainlist = document.querySelector(".main-list")

//event
document.addEventListener("DOMContentLoaded", getTodo)
add.addEventListener("click", puttext)
todoList.addEventListener("click", deleteItem)
//function
function puttext(event) {
    event.preventDefault()
    //create div
    var MaintodoDiv = document.createElement('div')
    MaintodoDiv.classList.add("main-div")
    //create li    
    const li = document.createElement('li')
    li.classList.add("li")
    li.innerText = todoText.value;
    savelocal(todoText.value)
    MaintodoDiv.appendChild(li)
    //create button check
    const check = document.createElement('button')
    check.classList.add("check")
    check.innerHTML = `<i class="fas fa-check-circle"></i>`;
    MaintodoDiv.appendChild(check)
    //create button trush
    const trush = document.createElement('button')
    trush.classList.add("check")
    trush.innerHTML = `<i class="fas fa-trash-alt"></i>`
    MaintodoDiv.appendChild(trush)
    //append todolist
    todoList.appendChild(MaintodoDiv)

    todoText.value = ""

}

//delete todo task & check task

function deleteItem(eo) {

    if (eo.target.className == "fas fa-trash-alt") {
        eo.target.parentElement.parentElement.remove()
        removeLocal()

    } else if (eo.target.className == "fas fa-check-circle") {
        eo.target.classList.add("green")
      
        todoList.prepend(eo.target.parentElement.parentElement)

    } else {
        eo.target.classList.remove("green")
        todoList.append(eo.target.parentElement.parentElement)

    }


}

//function save local todo
function savelocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}



function getTodo() {
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach((todo) => {
        //create div
        var MaintodoDiv = document.createElement('div')
        MaintodoDiv.classList.add("main-div")
        //create li    
        const li = document.createElement('li')
        li.classList.add("li")
        li.innerText = todo;
        MaintodoDiv.appendChild(li)
        //create button check
        const check = document.createElement('button')
        check.classList.add("check")
        check.innerHTML = `<i class="fas fa-check-circle"></i>`;
        MaintodoDiv.appendChild(check)
        //create button trush
        const trush = document.createElement('button')
        trush.classList.add("check")
        trush.innerHTML = `<i class="fas fa-trash-alt"></i>`
        MaintodoDiv.appendChild(trush)
        //append todolist
        todoList.appendChild(MaintodoDiv)
    });
}
//function remove local storage
function removeLocal(todo) {
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    let todoIndex = todoList.querySelectorAll(".li").innerHTML;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))

    console.log(todoIndex);
}
//end remove task &Transfer to the heart
/*end to do list*/











