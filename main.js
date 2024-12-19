// Function to handle the flip on click or tap
document.querySelectorAll('.flip-card').forEach(card => {
    // Prevent flip when the email link is clicked/tapped
    card.addEventListener('click', (event) => {
        if (event.target.closest('#emailLink')) {
            return; // Skip flip if the email link is clicked
        }
        card.classList.toggle('flipped');
    });

    // Handle tap on mobile devices to flip the card
    card.addEventListener('touchstart', (event) => {
        if (event.target.closest('#emailLink')) {
            return; // Skip flip if the email link is tapped
        }
        // Prevents any other touch behavior like scrolling or zooming
        event.preventDefault(); 
        card.classList.toggle('flipped');
    });
});

// Ensure clicking the email link doesn't trigger the flip action
const emailLink = document.getElementById('emailLink');
if (emailLink) {
    emailLink.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent card flip when the email link is clicked
    });
}


