function updateAge() {
    const birthDate = new Date('2003-01-04'); // Replace with your actual birthdate (yy-mm-dd)
    const now = new Date();
    
    const diffMs = now - birthDate;
    const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
    const days = Math.floor((diffMs % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diffMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diffMs % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diffMs % (60 * 1000)) / 1000);

    const ageDisplay = document.getElementById('age-value');
    ageDisplay.textContent = `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateAge();
setInterval(updateAge, 1000);
document.addEventListener('DOMContentLoaded', () => {
    updateAge();
    setInterval(updateAge, 1000);
});