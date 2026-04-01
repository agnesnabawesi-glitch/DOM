




const allParagraphs = document.querySelectorAll(".intro-paragraph");
console.log(allParagraphs);
// Using getElementaryById -->
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading)
const introParagraphsByClassName = document.getElementsByClassName("intro-paragraph");
console.log(introParagraphsByClassName);
// manipulating the DOM
mainHeading.textContent = "hello, javascript in the DOM";
mainHeading.style.color = "blue";
mainHeading.style.fontsize = "54px";
// event handling
// Examples of events 
//1. click event ,2. Mouseover event, 3. keydwown event
// 4. input event , 5. submit event



const changeButton = document.querySelector("#change-paragraph");
console.log(changeButton);

changeButton.addEventListener("click", function () {
    mainHeading.textContent = "Paragraph has been changed!";
    mainHeading.style.color = "red";
    mainHeading.style.fontSize = "24px";
})


