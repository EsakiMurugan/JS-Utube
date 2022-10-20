// Target ID & Classes

let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successMsg = classes("success-icon"),
failureMsg = classes("failure-icon")

// Event Listener

form.addEventListener("submit",(e) => {
    e.preventDefault()

    engine(username,0,"Username cannot be blank")
    engine(email,1,"email cannot be blank")
    engine(password,2,"password cannot be blank")
    
    // if(username.value === ""){
    //     errorMsg[0].innerHTML = "Username cannot be blank"
    //     failureMsg[0].style.opacity ="1"
    // }else{
    //     errorMsg[0].innerHTML = ""
    //     successMsg[0].style.opacity = "1"
    // }
})

// Engine function

let engine = (id,serial,message) => {
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message
        failureMsg[serial].style.opacity ="1"
        successMsg[serial].style.opacity = "0"
    }else{
        errorMsg[serial].innerHTML = ""
        successMsg[serial].style.opacity = "1"
        failureMsg[serial].style.opacity ="0"
    }
}

