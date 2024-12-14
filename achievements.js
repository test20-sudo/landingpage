document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupClose = document.querySelector('.popup-close');
    const popupImage = document.querySelector('.popup-image');
    const popupDescription = document.querySelector('.popup-description');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.querySelector('img').src;
            const description = item.dataset.description;

            popupImage.src = imageSrc;
            popupDescription.textContent = description;
            popupOverlay.style.display = 'flex';
        });
    });

    popupClose.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});