// Script to change diamond size on scroll
window.addEventListener('scroll', function() {
    const diamond = document.getElementById('floating-diamond');
    const scrollY = window.scrollY;

    // Change size based on scroll position
    const scaleFactor = 1 + (scrollY / 1000); // Increase size as you scroll down
    diamond.style.transform = `translateX(-50%) scale(${scaleFactor})`;

    // If scroll is at the top, reset size
    if (scrollY === 0) {
        diamond.style.transform = `translateX(-50%) scale(1)`;
    }
});
