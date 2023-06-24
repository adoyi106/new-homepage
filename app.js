const btn_mobile_menu = document.querySelector(".btn_mobile_menu");
const nav = document.querySelector(".nav");
const btn_open = document.querySelector(".menu_open");
const btn_close = document.querySelector(".menu_close");
const hero_image = document.querySelector(".hero_image");
const main = document.querySelector(".main");

btn_mobile_menu.addEventListener("click", function (e) {
  e.preventDefault();
  if (btn_close) {
    btn_open.classList.toggle("hidden");
    btn_close.classList.toggle("hidden");
    nav.classList.toggle("hidden");
  }
});

const changeHeroImage = function () {
  if (screen.width >= 600) {
    hero_image.src = "./assets/images/image-web-3-desktop.jpg";
  } else {
    hero_image.src = "./assets/images/image-web-3-mobile.jpg";
    hero_image.classList.remove("col-span-2");
  }
};
changeHeroImage();
