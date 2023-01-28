const inputarea = document.querySelector('.text-box')
const addbutton = document.querySelector('.add-btn')
const listtdl = document.querySelector('.new')
// const closetextarea =document.getElementById('cancelbutton')
// const checkButton = document.querySelector('.add')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemlist = document.createElement('new')
    itemlist.classList.add('itemlist')
    // adds the text panels

    // add items in text-panels
    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputarea.value
    itemlist.appendChild(item) //adds items to field

    // const checkButton = document.createElement('btn')

    if (inputarea.value === '') {
        alert("Please input an item")
        return
}

    const checkbutton = document.createElement("btn")
    // if (document.querySelector.value('.textbox') === "go") {
    //     // checkbutton.disabled = true; //button remains disabled
    // } else{
    //     checkbutton.disabled = false; //button is enabled
    // }
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemlist.appendChild(checkbutton)
    document.getElementById('addList').style.display= "none"

    const trashbutton = document.createElement("btn")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemlist.appendChild(trashbutton)

    listtdl.appendChild(itemlist)
    inputarea.value = ''
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}


addbutton.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)

function openList() {
    document.getElementById('addList').style.display= "flex"
}

// TEXT NOTE
// const checkButton = document.createElement('btn')

// if (inputarea.value === '') {
//     if (inputarea.value == '') {
//     inputarea.value = "uiufiuiufiu"
//     document.getElementById('bttn').disabled = "true"
//     }else {
//     document.getElementById('bttn').enabled = "false"
// }
//     // function startCombine(checkButton) {
//     //     checkButton.disabled = "true"
//     // }
//     return
// }