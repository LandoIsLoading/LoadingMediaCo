const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', toggleFlip);
  card.addEventListener('touchstart', toggleFlip);
});

function toggleFlip(event) {
  event.preventDefault(); // Prevent default link behavior (if clicked on an anchor)
  this.classList.toggle('flipped');
}
