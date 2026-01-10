function mostrarMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("mostrar");
}

function exibirCardPort(imgSrc) {
  const modal = document.getElementById("modalProjeto");
  const img = modal.querySelector("img");

  img.src = imgSrc;
  modal.classList.add("ativa");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  const modal = document.getElementById("modalProjeto");
  modal.classList.remove("ativa");
  document.body.style.overflow = "auto";
} 

const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.2, // 20% visível já anima
  }
);

elementos.forEach((el) => observer.observe(el));
