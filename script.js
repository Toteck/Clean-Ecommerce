const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const products = [
  {
    img: "./imagens/nairo.svg",
    category: "Featured",
    type: "Nairo Series®",
    bag_id: "um"
  },
  {
    img: "./imagens/kensho.svg",
    category: "New",
    type: "Kensho Series®",
    bag_id: "dois"
  },
  {
    img: "./imagens/atarashi.svg",
    category: "Handmade",
    type: "Atarashi Series®",
    bag_id: "tres"
  }
]

products.map(product => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", product.bag_id);
  cardClone.querySelector("img").src = product.img;
  cardClone.querySelector(".content > .category").innerHTML = product.category;
  cardClone.querySelector(".content > .type").innerHTML = product.type;
  sectionCards.appendChild(cardClone);
})

card.remove();