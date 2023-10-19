var whiteMode = window.document.getElementById("claro");
var darkMode = window.document.getElementById("escuro");

var body = window.document.getElementById("body");
var sectionOne = window.document.getElementById("sectionOne");
var sectionTwo = window.document.getElementById("sectionTwo");

var classDark = window.document.getElementById("escuro");
var classWhite = window.document.getElementById("claro");

darkMode.addEventListener("click", () => {
    body.style.background = "#073939";
    body.style.color = "white";

    sectionOne.style.background = "8d8d8d"
    sectionTwo.style.background = "8d8d8d"
    classDark.classList.toggle("mode");
});

whiteMode.addEventListener("click", () => {
    body.style.background = "#108787ff";
    body.style.color = "white";

    sectionOne.style.background = "white"
    sectionTwo.style.background = "white"
    classWhite.classList.toggle("mode");
});





