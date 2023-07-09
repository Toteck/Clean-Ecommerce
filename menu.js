let show = true;

const menuSection = document.querySelector(".menu-section");

const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial"
  
  menuSection.classList.toggle("on", show) 
  
  show = !show
})

let show2 = true;
const menuSectionOptions = menuSection.querySelector(".menu-section-options");
const menuToggleProducts = menuSectionOptions.querySelector(".products-dropdown")
const productsContent = menuToggleProducts.querySelector(".products-content")



menuToggleProducts.addEventListener("click", () => {
  if (productsContent.style.display === "flex") {
    productsContent.style.display = "none";
  } else {
    productsContent.style.display = "flex";
  }
})

// toggleMenuProducts() {
//   let menu = document.getElementById("products-dropdown");
//   if (x.style.display === "flex") {
//     menu.style.display = "none"
//   } else {
//     menu.style.display = "flex";
//   }
// }

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }