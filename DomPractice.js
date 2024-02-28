

// Write a JavaScript program that creates a button and add a click event listener to log a message when it's clicked.

let div = document.getElementById("maindiv")
let button=document.createElement("button")
button.innerText="click"
maindiv.appendChild(button)

button.addEventListener("click",()=>{
    console.log("Hello Rohan")
})


// Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked.
let dropdown = document.createElement("input")
dropdown.setAttribute("type","dropdown")
div.append(dropdown)

//form validation

let firstName=document.getElementById("inpt1")
let lastName=document.getElementById("inpt2")
let button=document.getElementById("button")
button.addEventListener("click",()=>{

    firstName.value==""?alert("enter your first Name"):lastName.value==""?alert("enter your last name"):"nothing"

})


//slideshow using js

let slideshowdiv = document.getElementById("slideDiv")
let image = document.getElementById("image")
const preButton = document.createElement("button")
const nextButton = document.createElement("button")

preButton.innerText = "Previous"
nextButton.innerText = "next"


slideshowdiv.append(preButton, nextButton)


preButton.addEventListener("click", () => {
  
    
})

nextButton.addEventListener("click", () => {
    console.log("clicke")
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU"
})






