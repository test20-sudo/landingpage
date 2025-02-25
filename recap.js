function openRecap() {
    const modal = document.getElementById('recapModal');
    const img = document.getElementById('recapImage');
    img.src = 'recap.jpeg'; // Replace with actual image path
    modal.style.display = 'block';
}

function closeRecap() {
    document.getElementById('recapModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('recapModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}