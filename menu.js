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

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
