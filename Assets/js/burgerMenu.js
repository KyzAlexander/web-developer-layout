const burger = document.querySelector(".hero__burger");
const closeBurger = document.querySelector(".hero__menu-cross");
const menu = document.querySelector(".hero__menu");
const overlay = document.querySelector(".hero__overlay");

burger.addEventListener("click", () => {
  burger.classList.toggle("hero__burger--active");
  menu.classList.toggle("hero__menu--active");
  overlay.classList.toggle("hero__overlay--active");
});

closeBurger.addEventListener("click", () => {
  burger.classList.remove("hero__burger--active");
  menu.classList.remove("hero__menu--active");
  overlay.classList.remove("hero__overlay--active");
});

overlay.addEventListener("click", () => {
  burger.classList.remove("hero__burger--active");
  menu.classList.remove("hero__menu--active");
  overlay.classList.remove("hero__overlay--active");
});

