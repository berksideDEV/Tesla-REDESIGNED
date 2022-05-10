//Hamburger menu hide/show 
const hamburger = document.querySelector(".hamburger");
const navMenu  =document.querySelector(".nav-menu");

hamburger.addEventListener('click', function() {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
}))

//Highlight active <a> in nav
$(function () {
$(".nav-item a").click(function (e) {
    $(".nav-item a").addClass("active").not(this).removeClass("active");
})
})