// Exibe uma mensagem de boas-vindas quando a página é carregada
window.onload = function() {
    alert("Bem-vindo ao meu site!");
};

// Função para destacar o parágrafo ao ser clicado
function destacarParagrafo(event) {
    event.target.style.backgroundColor = "#e0f7fa";
    event.target.style.fontWeight = "bold";
}

// Seleciona todos os parágrafos e adiciona o evento de clique
const paragrafos = document.querySelectorAll("section p");
paragrafos.forEach(paragrafo => {
    paragrafo.addEventListener("click", destacarParagrafo);
});

// Função para mudar a cor de fundo da galeria ao passar o mouse
const galeria = document.querySelector(".galeria");
galeria.addEventListener("mouseover", () => {
    galeria.style.backgroundColor = "#f0f0f5";
});

galeria.addEventListener("mouseout", () => {
    galeria.style.backgroundColor = "transparent";
});
