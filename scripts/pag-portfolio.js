function exibirCardPort() {
  const modal = document.getElementById("modalProjeto");
  modal.classList.add("ativa");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  const modal = document.getElementById("modalProjeto");
  modal.classList.remove("ativa");
  document.body.style.overflow = "auto";
}
