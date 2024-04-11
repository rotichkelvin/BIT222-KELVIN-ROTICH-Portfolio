
const menuBtn = document.querySelector(".menu");
const menu = document.querySelector("header nav");

menuBtn.addEventListener("click", function (){
    menu.classList.toggle("show");
    this.classList.toggle("highlight");
});