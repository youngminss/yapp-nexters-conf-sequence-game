document.addEventListener("DOMContentLoaded", () => {
  const cardsData = [
    { text: "동물" },
    { text: "운동종목" },
    { text: "직업" },
    { text: "노래" },
    { text: "속담" },
    { text: "영화" },
  ];

  const cardsContainer = document.querySelector(".cards-container");

  // 카드 데이터를 섞는 함수
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 카드를 생성하고 배치하는 함수
  function createAndPlaceCards() {
    cardsContainer.innerHTML = ""; // 기존 카드를 모두 제거
    const shuffledCards = shuffleArray([...cardsData]);

    shuffledCards.forEach((cardData) => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-text", cardData.text);
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back">${cardData.text}</div>
        </div>
      `;
      cardsContainer.appendChild(card);
    });

    // 카드에 이벤트 리스너 추가
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        if (!card.classList.contains("flipped")) {
          flipCard(card);
        }
      });
    });
  }

  // 페이지 로드 시 카드 생성 및 배치
  createAndPlaceCards();

  function flipCard(card) {
    card.classList.add("flipped");
    const cardText = card.getAttribute("data-text");
  }
});
