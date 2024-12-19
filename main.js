const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    let touchstartX = 0;
    let touchendX = 0;
    let isTouch = false;

    card.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        isTouch = true;
    });

    card.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        if (Math.abs(touchendX - touchstartX) < 10) {
            toggleFlip.call(card, e);
        }
        isTouch = false;
    });

    card.addEventListener('touchmove', e => {
        e.preventDefault(); // Prevent scrolling
    });

    // NEW: Use a separate touch event for the link
    const link = card.querySelector('a'); // Select the link inside the card
    if (link) {
        link.addEventListener('touchstart', e => {
            e.stopPropagation(); // Prevent the card's touch events from firing
        });
        link.addEventListener('click', e => {
            if(isTouch){
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
