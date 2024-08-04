document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("flipped")) {
        flipCard(card);
      }
    });
  });
});

function flipCard(card) {
  card.classList.add("flipped");
  const cardText = card.getAttribute("data-text");

  card.querySelector(".card-inner").addEventListener(
    "transitionend",
    () => {
      setTimeout(() => {
        alert(`뽑은 카드: ${cardText}`);
      }, 100);
    },
    { once: true }
  );
}
