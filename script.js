
document.querySelector('.career-btn').addEventListener('click', () => {
    const careerSection = document.getElementById('career-section');
    const aboutText = document.querySelector('.financial-services');
    const introPara = document.querySelector('main > p');

    // Toggle visibility
    if (careerSection.style.display === 'none') {
        careerSection.style.display = 'block';
        aboutText.style.display = 'none';
        introPara.style.display = 'none';
    } else {
        careerSection.style.display = 'none';
        aboutText.style.display = 'block';
        introPara.style.display = 'block';
    }
});
// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the Jobopenings page
    if (window.location.pathname.includes('Jobopenings.html')) {
        document.getElementById('opening-link').classList.add('active');
    }
});
