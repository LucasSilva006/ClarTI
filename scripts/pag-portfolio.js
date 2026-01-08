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
