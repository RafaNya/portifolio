// Interações do portfólio de Rafael Souza França

// 1) Botão do início: troca a mensagem de apresentação
const botaoSaudacao = document.getElementById("btn-saudacao");
const mensagem = document.getElementById("mensagem");
const textoOriginal = mensagem.textContent;
let mostrandoExtra = false;

botaoSaudacao.addEventListener("click", function () {
  mostrandoExtra = !mostrandoExtra;
  if (mostrandoExtra) {
    mensagem.textContent =
      "Na Etec estou aprendendo HTML, CSS, Java, banco de dados e sistemas " +
      "embarcados com Arduino e C++. Role a página para ver meus projetos!";
    botaoSaudacao.textContent = "Voltar";
  } else {
    mensagem.textContent = textoOriginal;
    botaoSaudacao.textContent = "Clique e conheça mais";
  }
});

// 2) Botão de tema: alterna entre claro e escuro
const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", function () {
  const escuro = document.body.classList.toggle("escuro");
  botaoTema.textContent = escuro ? "Tema claro" : "Tema escuro";
  botaoTema.setAttribute("aria-pressed", String(escuro));
});

// 3) Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
