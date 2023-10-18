var whiteMode = window.document.getElementById("claro");
var darkMode = window.document.getElementById("escuro");

var body = window.document.getElementById("body");
var section = window.document.getElementsByClassName("section")

darkMode.addEventListener("click", () => {
    body.style.background = "#073939";
    body.style.color = "white";
});

whiteMode.addEventListener("click", () => {
    body.style.background = "#108787ff";
    body.style.color = "white";
});





