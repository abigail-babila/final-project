// Back to Top Button
// function to show or hide the button based on scroll position
function handleScroll() {
    const backToTopButton = document.getElementById('backToTop');

    if (window.pageYOffset > 300) { // show button if scrolled down at least 300px
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

// function to smoothly scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// function to run once DOM is ready
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', scrollToTop);
}

// Wait for DOM to load before running
document.addEventListener('DOMContentLoaded', initBackToTop);