/* 

1º Quando o usúario cliacar no botão "veja o trailer" abrir o modal
    -dar um jeito de pegar o elemento que representa o botao na tela usando o js
    -dar um jeito de identificar quando o usaurio clica no botao
    -dar um jeito de pegar o elemento da modal no js
    -abrir a modal na tela

2º quando o usuario clicar no 'x' devemos fechar o modal

    -dar umn jeito de pegar o elemento de fechar modal usando o js
    - dar uma jeito de identificar quando o usuario clica no x
    - fechar modal
    

*/


// pegar o elemento que representa o botao na tela usando o js
const modal = document.querySelector(".modal");
const botaoTreiler = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkYoutube = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

// identificar quando o usaurio clica no botao

botaoTreiler.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkYoutube);

})

// pegar o elemento da modal no js



//abrir a modal na tela



//pegar o elemento de fechar modal usando o js





//identificar quando o usuario clica no x
botaoFecharModal.addEventListener("click", () => {
    //Fechar modal
    alternarModal();
    //video parar de tocar quando clicar no "x"
    video.setAttribute("src", "");
});








