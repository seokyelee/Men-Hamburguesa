const toggleBtn = document.querySelector(".navbar__toogleBtn");

const menu = document.querySelector(".navbar__menu");

const iconos = document.querySelector(".navbar__iconos");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  iconos.classList.toggle("active");
});
