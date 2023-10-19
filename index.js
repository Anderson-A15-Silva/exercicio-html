var whiteMode = window.document.getElementById("claro");
var darkMode = window.document.getElementById("escuro");

var body = window.document.getElementById("body");
var sectionO = window.document.getElementById("sectionOne");
var sectionT = window.document.getElementById("sectionTwo");

var classDark = window.document.getElementById("escuro");
var classWhite = window.document.getElementById("claro");

sectionO.classList.toggle("section");
sectionT.classList.toggle("section");

classDark.classList.toggle("dk");
classWhite.classList.toggle("wt");

darkMode.addEventListener("click", () => {
    body.style.background = "black";
    body.style.color = "white";

    sectionO.style.background = "#3b3a3a";
    sectionT.style.background = "#3b3a3a";

    darkMode.style.display = "none"
    whiteMode.style.display = "block"
    whiteMode.style.background = "white"
});

whiteMode.addEventListener("click", () => {
    body.style.background = "#108787ff";
    body.style.color = "black";

    sectionO.style.background = "white";
    sectionT.style.background = "white";

    whiteMode.style.display = "none";
    darkMode.style.display = "block";
});





