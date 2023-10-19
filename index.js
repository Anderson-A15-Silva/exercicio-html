var whiteMode = window.document.getElementById("claro");
var darkMode = window.document.getElementById("escuro");

var body = window.document.getElementById("body");
var sectionOne = window.document.getElementById("sectionOne");
var sectionTwo = window.document.getElementById("sectionTwo");

var classDark = window.document.getElementById("escuro");
var classWhite = window.document.getElementById("claro");

darkMode.addEventListener("click", () => {
    body.style.background = "black";
    body.style.color = "white";

    sectionOne.style.background = "#3b3a3a";
    sectionTwo.style.background = "#3b3a3a";

    sectionOne.classList.toggle("section");
    sectionTwo.classList.toggle("section");
    classDark.classList.toggle("mode");

    darkMode.style.display = "none"
    whiteMode.style.display = "block"
});

whiteMode.addEventListener("click", () => {
    body.style.background = "#108787ff";
    body.style.color = "white";

    sectionOne.style.background = "white";
    sectionTwo.style.background = "white";
    classWhite.classList.toggle("mode");

    whiteMode.style.display = "none";
    darkMode.style.display = "block";
});





