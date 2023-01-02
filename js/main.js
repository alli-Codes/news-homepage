const sideBar = document.querySelector(".menu");
const closeBtn = document.querySelector("#open");
const openBtn = document.querySelector("#close");
const links = document.querySelectorAll(".menu-nav a");

const toggleMenu = function () {
  sideBar.classList.toggle("open");
};

const togglingElements = [openBtn, closeBtn];
togglingElements.forEach((element) =>
  element.addEventListener("click", toggleMenu)
);
links.forEach((link) => link.addEventListener("click", toggleMenu));
