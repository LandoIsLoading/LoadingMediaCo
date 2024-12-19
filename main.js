const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    let touchstartX = 0;
    let touchendX = 0;
    let isTouch = false;
    let linkClicked = false; // Add this flag

    card.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        isTouch = true;
    });

    card.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        if (Math.abs(touchendX - touchstartX) < 10 && !linkClicked) { // Check linkClicked
            toggleFlip.call(card, e);
        }
        isTouch = false;
        linkClicked = false; // Reset the flag here
    });

    card.addEventListener('touchmove', e => {
        e.preventDefault(); // Prevent scrolling
    });

    const link = card.querySelector('a');
    if (link) {
        link.addEventListener('touchstart', e => {
            e.stopPropagation();
            linkClicked = true; // Set the flag when the link is touched
        });
        link.addEventListener('click', e => {
            if (isTouch) {
                e.preventDefault();
                window.location.href = link.href;
            }
        });
    } else {
        card.addEventListener('click', e => {
            if (!isTouch) {
                toggleFlip.call(card, e);
            }
        });
    }
});

function toggleFlip(event) {
    this.classList.toggle('flipped');
}
