let form = document.getElementById("form")
let textinput = document.getElementById("textinput")
let msg = document.getElementById("msg")
let dateinput = document.getElementById("dateinput")
let textarea = document.getElementById("textarea")
let tasks = document.getElementById("tasks")
let add = document.getElementById("add")
 

form.addEventListener("submit",(e) => {
e.preventDefault()
formValidation()
})

let formValidation = () => {
if(textinput.value === ""){
    console.log("Failure")
    msg.innerHTML = "Task cannot be blank"
}
else{
    console.log("Success")
    msg.innerHTML = ""
    acceptData()
    add.setAttribute("data-bs-dismiss","modal")
    add.click()

    // IIFE - Immediately Invoked Function Expression
    (() => {
        add.setAttribute("data-bs-dismiss","")
    })()
    
}}

let data = []

let acceptData = () => {
    data.push({
        text: textinput.value,
        date: dateinput.value,
        desc: textarea.value,
    })

    localStorage.setItem("data",JSON.stringify(data))
    console.log(data)
    createTasks()
}

let createTasks = () => {
    tasks.innerHTML = ""
    data.map((x,y) => {
        return (tasks.innerHTML += 
        `<div id=${y}>
        <span class = "fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.date}</span>
        <p>${x.desc}</p>
        <span class="options">
            <i onClick = "updateTask(this)" data-bs-toggle="modal" data-bs-target="#form" class = " fas fa-edit"></i>
            <i onClick = "deleteTask(this)" class = "fas fa-trash-alt"></i>
        </span>
        </div>`)
    })

resetForm()
}

let resetForm = () => {
    textinput.value = ""
    dateinput.value = ""
    textarea.value = ""
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove()
    data.splice(e.parentElement.parentElement.id,1)
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data)
}

let updateTask = (e) => {
    
    let thaiElement = e.parentElement.parentElement

    textinput.value = thaiElement.children[0].innerHTML
    dateinput.value = thaiElement.children[1].innerHTML
    textarea.value = thaiElement.children[2].innerHTML

    deleteTask(e)

}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data)  
    createTasks()
})()