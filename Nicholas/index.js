const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card h3");

card.addEventListener("mouseover", (e) => {
  cardTitle.style.opacity = "1";
});
