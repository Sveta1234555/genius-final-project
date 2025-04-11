const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

//закрыть мобменю (после клика по меню-ссылке)
const closeMenu = () => {
  mobileMenu.classList.remove("is-open");
  disableScroll();
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", disableScroll);

// слушать нажатия на меню, если ссылка (а)- закрыть моб меню
// Делегирование событий:
mobileMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    // Проверяем, что клик был по ссылке
    closeMenu();
  }
});
