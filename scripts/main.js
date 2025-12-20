function mostrarMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("mostrar");
}

const track = document.getElementById("carouselTrack");
const indicatorsContainer = document.getElementById("indicators");
const cards = document.querySelectorAll(".box-portfolio");
const totalCards = cards.length;

let currentIndex = 0;
let cardsPerView = 3;

function updateCardsPerView() {
  if (window.innerWidth <= 768) {
    cardsPerView = 1;
  } else if (window.innerWidth <= 1024) {
    cardsPerView = 2;
  } else {
    cardsPerView = 3;
  }
  updateCarousel();
  createIndicators();
}

function createIndicators() {
  indicatorsContainer.innerHTML = "";
  const totalSlides = totalCards;

  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator");
    if (i === currentIndex) {
      indicator.classList.add("active");
    }
    indicator.onclick = () => goToSlide(i);
    indicatorsContainer.appendChild(indicator);
  }
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const gap = 24;
  const offset = -(currentIndex * (cardWidth + gap));
  track.style.transform = `translateX(${offset}px)`;

  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalCards) {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  }
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

window.addEventListener("resize", updateCardsPerView);

updateCardsPerView();




const trackPrecos = document.getElementById("carouselTrackPrecos");
const indicatorsContainerPrecos = document.getElementById("indicatorsPrecos");
const cardsPrecos = document.querySelectorAll(".card-precos");
const totalCardsPrecos = cardsPrecos.length;
let currentIndexPrecos = 0;
let cardsPerViewPrecos = 3;

function updateCardsPerViewPrecos() {
  if (window.innerWidth <= 768) {
    cardsPerViewPrecos = 1;
  } else if (window.innerWidth <= 1024) {
    cardsPerViewPrecos = 2;
  } else {
    cardsPerViewPrecos = 3;
  }
  updateCarouselPrecos();
  createIndicatorsPrecos();
}

function createIndicatorsPrecos() {
  indicatorsContainerPrecos.innerHTML = "";
  const totalSlidesPrecos = totalCardsPrecos;
  
  for (let i = 0; i < totalSlidesPrecos; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator-precos");
    if (i === currentIndexPrecos) {
      indicator.classList.add("active");
    }
    indicator.onclick = () => goToSlidePrecos(i);
    indicatorsContainerPrecos.appendChild(indicator);
  }
}

function updateCarouselPrecos() {
  const cardWidth = cardsPrecos[0].offsetWidth;
  const gap = 24;
  const offset = -(currentIndexPrecos * (cardWidth + gap));
  trackPrecos.style.transform = `translateX(${offset}px)`;
  updateIndicatorsPrecos();
}

function updateIndicatorsPrecos() {
  const indicators = document.querySelectorAll(".indicator-precos");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndexPrecos);
  });
}

function nextSlidePrecos() {
  currentIndexPrecos++;
  if (currentIndexPrecos >= totalCardsPrecos) {
    currentIndexPrecos = 0;
  }
  updateCarouselPrecos();
}

function prevSlidePrecos() {
  currentIndexPrecos--;
  if (currentIndexPrecos < 0) {
    currentIndexPrecos = totalCardsPrecos - 1;
  }
  updateCarouselPrecos();
}

function goToSlidePrecos(index) {
  currentIndexPrecos = index;
  updateCarouselPrecos();
}

window.addEventListener("resize", updateCardsPerViewPrecos);
updateCardsPerViewPrecos();