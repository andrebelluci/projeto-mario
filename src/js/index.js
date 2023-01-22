const trailerButton = document.querySelector('.trailer-button');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkTrailer = video.src;
const closeModal = [
  document.querySelector('.modal-close'),
  document.querySelector('.modal-content'),
];

function alterModal() {
  modal.classList.toggle('open');
}

function closeVideo() {
  alterModal();
  video.setAttribute('src', '');
}

trailerButton.addEventListener('click', () => {
  video.setAttribute('src', linkTrailer);
  alterModal();
});

closeModal[(0, 1)].addEventListener('click', () => {
  closeVideo();
});
