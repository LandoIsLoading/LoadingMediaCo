const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  let touchstartX = 0;
  let touchendX = 0;

  card.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  });

  card.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    if (Math.abs(touchendX - touchstartX) < 10) { // Check for minimal movement (tap)
      toggleFlip.call(card, e); // Use call to set 'this' context
    }
  });

  //Optional: prevent scroll while touching card
    card.addEventListener('touchmove', e => {
        e.preventDefault();
    });

  card.addEventListener('click', toggleFlip);
});

function toggleFlip(event) {
    event.preventDefault();
    this.classList.toggle('flipped');
}
