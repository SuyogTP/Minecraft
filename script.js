// JavaScript to trigger 3D scroll effect and interaction
let content = document.querySelector('.content');
let title = document.querySelector('.minecraft-title');
let footer = document.querySelector('.footer-text');

document.addEventListener('mousemove', function(event) {
    let x = event.clientX / window.innerWidth - 0.5;
    let y = event.clientY / window.innerHeight - 0.5;

    content.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
});

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
        content.classList.add('active');
    }
});

// 3D effect with mouse movement
content.addEventListener('mouseenter', function() {
    content.classList.add('active');
});

content.addEventListener('mouseleave', function() {
    content.classList.remove('active');
});
