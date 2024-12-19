const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    let touchstartX = 0;
    let touchendX = 0;

    card.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    card.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        if (Math.abs(touchendX - touchstartX) < 10) { // Tap detected
            toggleFlip.call(card, e);
        }
    });

    card.addEventListener('touchmove', e => {
        e.preventDefault(); // Prevent scrolling
    });

    card.addEventListener('click', e => {
        // Check if the click originated from an anchor tag (link)
        if (e.target.tagName !== 'A') {
            toggleFlip.call(card, e);
        }
    });
});

function toggleFlip(event) {
    event.preventDefault(); // Prevent default click behavior on card itself
    this.classList.toggle('flipped');
}
