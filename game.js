// Initialize score
var score = 0;

// Get elements from HTML
const scoreDisplay = document.getElementById('scoreValue');
const clickButton = document.getElementById('clickButton');


// Add click event listener to button
clickButton.addEventListener('click', () => {
    // Increase score by 1 on each click
    score++;
    scoreDisplay.textContent = score;
});
