document
  .querySelector(".menu__icon")
  .addEventListener("click", function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
      menuItems.style.maxHeight = "200px";
    } else {
      menuItems.style.maxHeight = "0px";
    }
  });

let menuItems = document.querySelector("#menu__items");

menuItems.style.maxHeight = "0px";

// JS for product gallery

let productImg = document.querySelector(".gallery__img");
let smallImg = document.querySelectorAll(".small__img");

smallImg[0].addEventListener("click", () => {
  productImg.src = smallImg[0].src;
});

smallImg[1].addEventListener("click", () => {
  productImg.src = smallImg[1].src;
});

smallImg[2].addEventListener("click", () => {
  productImg.src = smallImg[2].src;
});

smallImg[3].addEventListener("click", () => {
  productImg.src = smallImg[3].src;
});
