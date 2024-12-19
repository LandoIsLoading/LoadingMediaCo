const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    let touchstartX = 0;
    let touchendX = 0;
    let isTouch = false; // Flag to track if it's a touch event

    card.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        isTouch = true; // Set the flag
    });

    card.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        if (Math.abs(touchendX - touchstartX) < 10) {
            toggleFlip.call(card, e);
        }
        isTouch = false; // Reset the flag
    });

    card.addEventListener('touchmove', e => {
        e.preventDefault();
    });

    card.addEventListener('click', e => {
        if (!isTouch) { // Only prevent default for card flips, not links
            toggleFlip.call(card, e);
        }
    });
});

function toggleFlip(event) {
    this.classList.toggle('flipped');
}
