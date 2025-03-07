document.addEventListener('DOMContentLoaded', () => {
    // Create starry background
    createStars();

    // Add hover effect to planets
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.addEventListener('mouseenter', () => {
            planet.style.transform = 'scale(1.2)';
        });
        planet.addEventListener('mouseleave', () => {
            planet.style.transform = 'scale(1)';
        });
    });
});

function createStars() {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
        stars.appendChild(star);
    }

    // Add keyframe animation for twinkling stars
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

