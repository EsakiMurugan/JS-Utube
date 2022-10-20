let id = (id) => document.getElementById(id)

let form = id("form"),
 input = id("input"),
 posts = id("posts")
let message = (document.getElementsByClassName("message"))

// Submit

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log("Button clicked")
    formValidation()
})

// Form Validation

let formValidation = () => {
    if(input.value === ""){
        message[0].innerHTML = "Post cannot be blank"}
        else{
            message[0].innerHTML = ""
            console.log(data)
            acceptData()
        }
}

// Accept & Store data

let data = {}

let acceptData = () => {
    data["text"] = input.value
    console.log(data)
    createPost()
}

// Create

let createPost = () => {
    posts.innerHTML += data.text
    ` <div>
    <p>${data.text}</p>
    <span class="contains">
        <i onClick = "updatePost(this)" class="fas fa-edit"></i>
        <i onClick = "deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
</div>`
input.value = ""
}

// Delete

let deletePost = (e) => {
    e.parentElement.parentElement.remove()
}

// Update

let updatePost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
    
}