/**
 * * OBJETIVO 1 - Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer
 * 1 - Pegar o elemento que representa o botão na tela do usuário
 * 2 - Pegar o elemento da modal no JS
 * 3 - Pegar o elemento do iFrame
 * 4 - Identificar quando o usuário clicar no botão
 * 5 - Adicionar atributo src
 * 6 - Abrir a modal na tela
 *
 * * OBJETIVO 2 = Quando o usuário clicar no X, devemos fechar a modal
 * 1 - Pegar o elemento de fechar a modal usando o JS
 * 2 - Pegar o elemtno do iFrame
 * 3 - Identificar quando o usuário clica no X
 * 4 - Fechar a modal
 * 5 - Remover atributo src
 * 
 * * OBJETIVO 3 = Quando o usuário clicar em qualquer lugar da tela, devemos fechar a modal
 * 1 - Pegar o elemento da tela
 * 2 - Pegar o elemtno do iFrame
 * 3 - Identificar quando o usuário clica fora da modal
 * 4 - Fechar a modal
 * 5 - Remover atributo src
 */

// * * OBJETIVO 1 - Quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer

// * 1 - Pegar o elemento que representa o botão na tela do usuário
// console.log(document.querySelector('.trailer-button'))
const trailerButton = document.querySelector('.trailer-button');

// * 2 - Pegar o elemento da modal no JS
const modal = document.querySelector('.modal');
// console.log('Show modal class', modal);

// * 3 - Pegar o elemento do iFrame
const video0 = document.getElementById('video');
const linkTrailer = video0.src;

// * 4 - Identificar quando o usuário clicar no botão
trailerButton.addEventListener('click', () => {
    // * 5 - Adicionar atributo src
    video0.setAttribute('src', linkTrailer);
    // console.log('Clicked!');
    // * 6 - Abrir a modal na tela
    // console.log(modal.classList); 
    modal.classList.add('open'); 
});

// * * OBJETIVO 2 = Quando o usuário clicar no X, devemos fechar a modal

// * 1 - Pegar o elemento de fechar a modal usando o JS
const closeModal = document.querySelector('.modal-close');

// * 2 - Pegar o elemtno do iFrame
const video1 = document.getElementById('video');

// * 3 - Identificar quando o usuário clica no X
closeModal.addEventListener('click', () => {
    // * 4 - Fechar a modal
    modal.classList.remove('open');
    // * 5 - Remover atributo src
    video1.setAttribute('src', '');
});

// * * OBJETIVO 3 = Quando o usuário clicar em qualquer lugar da tela, devemos fechar a modal

// * 1 - Pegar o elemento da tela
const clickOutsideModal = document.querySelector('.modal-content');

// * 2 - Pegar o elemtno do iFrame
const video2 = document.getElementById('video');

// * 3 - Identificar quando o usuário clica fora da modal
clickOutsideModal.addEventListener('click', () => {
    // * 4 - Fechar a modal
    modal.classList.remove('open');
    // * 5 - Remover atributo src
    video2.setAttribute('src', '');
});
