document.addEventListener('DOMContentLoaded', function() {
    updateYear();
});

function updateYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateYear();
    setupPhotoClicks();
    setupThemeToggle();
});

function updateYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

function setupPhotoClicks() {
    const photos = document.querySelectorAll('img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            photo.classList.toggle('clicked-photo');
        });
    });
}

function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}
