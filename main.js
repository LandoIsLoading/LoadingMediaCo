// Function to handle the flip on click or touch
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', (event) => {
        // If the click is on the link inside the contact card, don't flip the card
        if (event.target.closest('#emailLink')) {
            return;
        }
        card.classList.toggle('flipped');
    });

    // Mobile touch event handling
    card.addEventListener('touchstart', (event) => {
        // If the touch is on the link inside the contact card, don't flip the card
        if (event.target.closest('#emailLink')) {
            return;
        }
        card.classList.toggle('flipped');
    });
});

// Ensure clicking the email link doesn't trigger the flip action
const emailLink = document.getElementById('emailLink');
if (emailLink) {
    emailLink.addEventListener('click', (event) => {
        // Prevent the card from flipping when clicking the email link
        event.stopPropagation();
    });
}


