function mostrarMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("mostrar");
}

// ========== CARROSSEL PORTFÓLIO ==========
const track = document.getElementById("carouselTrack");
const indicatorsContainer = document.getElementById("indicators");
const cards = document.querySelectorAll(".box-portfolio");
const totalCards = cards.length;

let currentIndex = 0;
let cardsPerView = 3;
let cachedCardWidth = 0; // Cache da largura do card

function updateCardsPerView() {
  if (window.innerWidth <= 768) {
    cardsPerView = 1;
  } else if (window.innerWidth <= 1024) {
    cardsPerView = 2;
  } else {
    cardsPerView = 3;
  }

  // Lê offsetWidth UMA VEZ e cacheia
  cachedCardWidth = cards[0]?.offsetWidth || 0;

  updateCarousel();
  createIndicators();
}

function createIndicators() {
  indicatorsContainer.innerHTML = "";

  for (let i = 0; i < totalCards; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator");
    indicator.setAttribute("aria-label", `Ir para slide ${i + 1}`);
    if (i === currentIndex) {
      indicator.classList.add("active");
    }
    indicator.onclick = () => goToSlide(i);
    indicatorsContainer.appendChild(indicator);
  }
}

function updateCarousel() {
  // Usa o valor cacheado em vez de ler offsetWidth novamente
  const gap = 24;
  const offset = -(currentIndex * (cachedCardWidth + gap));

  // Usa requestAnimationFrame para otimizar animações
  requestAnimationFrame(() => {
    track.style.transform = `translateX(${offset}px)`;
  });

  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// Debounce para resize (evita chamadas excessivas)
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateCardsPerView, 150);
});

updateCardsPerView();

// ========== CARROSSEL PREÇOS ==========
const trackPrecos = document.getElementById("carouselTrackPrecos");
const indicatorsContainerPrecos = document.getElementById("indicatorsPrecos");
const cardsPrecos = document.querySelectorAll(".card-precos");
const totalCardsPrecos = cardsPrecos.length;

let currentIndexPrecos = 0;
let cardsPerViewPrecos = 3;
let cachedCardWidthPrecos = 0; // Cache da largura do card

function updateCardsPerViewPrecos() {
  if (window.innerWidth <= 768) {
    cardsPerViewPrecos = 1;
  } else if (window.innerWidth <= 1024) {
    cardsPerViewPrecos = 2;
  } else {
    cardsPerViewPrecos = 3;
  }

  // Lê offsetWidth UMA VEZ e cacheia
  cachedCardWidthPrecos = cardsPrecos[0]?.offsetWidth || 0;

  updateCarouselPrecos();
  createIndicatorsPrecos();
}

function createIndicatorsPrecos() {
  indicatorsContainerPrecos.innerHTML = "";

  for (let i = 0; i < totalCardsPrecos; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator-precos");
    indicator.setAttribute("aria-label", `Ir para plano ${i + 1}`);
    if (i === currentIndexPrecos) {
      indicator.classList.add("active");
    }
    indicator.onclick = () => goToSlidePrecos(i);
    indicatorsContainerPrecos.appendChild(indicator);
  }
}

function updateCarouselPrecos() {
  // Usa o valor cacheado em vez de ler offsetWidth novamente
  const gap = 24;
  const offset = -(currentIndexPrecos * (cachedCardWidthPrecos + gap));

  // Usa requestAnimationFrame para otimizar animações
  requestAnimationFrame(() => {
    trackPrecos.style.transform = `translateX(${offset}px)`;
  });

  updateIndicatorsPrecos();
}

function updateIndicatorsPrecos() {
  const indicators = document.querySelectorAll(".indicator-precos");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndexPrecos);
  });
}

function nextSlidePrecos() {
  currentIndexPrecos = (currentIndexPrecos + 1) % totalCardsPrecos;
  updateCarouselPrecos();
}

function prevSlidePrecos() {
  currentIndexPrecos =
    (currentIndexPrecos - 1 + totalCardsPrecos) % totalCardsPrecos;
  updateCarouselPrecos();
}

function goToSlidePrecos(index) {
  currentIndexPrecos = index;
  updateCarouselPrecos();
}

// Debounce para resize (evita chamadas excessivas)
let resizeTimerPrecos;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimerPrecos);
  resizeTimerPrecos = setTimeout(updateCardsPerViewPrecos, 150);
});

updateCardsPerViewPrecos();



// ANIMAÇÕES

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

elementos.forEach((el) => observer.observe(el));
