const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('touchstart', function(event) {
    this.classList.toggle('flip');
    event.preventDefault(); // Prevent default touch behavior
  });
});

