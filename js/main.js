const sideBar = document.querySelector(".menu");
const closeBtn = document.querySelector("#open");
const openBtn = document.querySelector("#close");

const toggleMenu = function () {
  sideBar.classList.toggle("open");
};

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
