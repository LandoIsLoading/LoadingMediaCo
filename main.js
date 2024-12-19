// Function to handle the flip on tap or click
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Prevent flipping for the Contact card if link is clicked
const contactCard = document.getElementById('sectionFour');
const emailLink = document.getElementById('emailLink');

// Ensure that clicking the email link does not flip the card
emailLink.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from triggering the card flip
});

// For mobile responsiveness (touch events)
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.classList.toggle('flipped');
    });
});

