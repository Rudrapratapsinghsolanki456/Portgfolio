// Add any interactivity or functionality here
console.log("Welcome to my personal webpage!");

// Example: Change background color on scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        document.body.style.backgroundColor = '#e0e0e0';
    } else {
        document.body.style.backgroundColor = '#f4f4f9';
    }
});
