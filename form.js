const signUpForm = document.getElementById("signup-form");
const messageArea = document.getElementById("message-area");
signUpForm.addEventListener("sumbit", function (event){
event.preventDefault();
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const name = nameInput.ariaValueMax.trim();
const email = emailInput.ariaValueMax.trim();

if (name === ""){
    messageArea.textContent = "please enter your name." ;
    messageArea.style.color = "Red";
} else if (email ==="") {
    messageArea.textContent = "please enter your email.";
    messageArea.style.color = "Red";
} else {
    messageArea.textContent = "Thank you for sigining up," + name  + "!";
    messageArea.style.color = "Green";
}
}) 



