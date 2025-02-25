function animateCounter(elementId, targetNumber, speed = 50) {
    const counterElement = document.getElementById(elementId);
    let currentNumber = 0;
    const duration = 1500; // Reduced duration for faster increment
    const interval = speed; // Adjustable speed parameter
    const increment = targetNumber / (duration / interval);

    const counterInterval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(counterInterval);
        }
        counterElement.textContent = Math.floor(currentNumber);
    }, interval);
}

// Call counters with your actual numbers
// Added different speeds for variety
window.addEventListener('load', () => {
    animateCounter('internships-counter', 3, 30);
    animateCounter('papers-counter', 4, 20);
    animateCounter('projects-counter', 15, 10); // Faster increment for projects
});