// Currently no complex JS needed as per the image
// But adding subtle button focus animation for accessibility

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('focus', () => {
        button.style.boxShadow = '0 0 15px #7fffd4';
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('blur', () => {
        button.style.boxShadow = '';
        button.style.transform = '';
    });
});
