
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        popup.style.display = 'flex';
  
        form.reset();
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
