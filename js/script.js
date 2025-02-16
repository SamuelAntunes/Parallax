function scrollPage(direction) {
    const sections = document.querySelectorAll(".parallax");
    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSectionIndex = index;
        }
    });

    let nextIndex = currentSectionIndex + direction;

    if (nextIndex >= 0 && nextIndex < sections.length) {
        sections[nextIndex].scrollIntoView({ behavior: "smooth" });
    }
}

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

const sections = document.querySelectorAll('.parallax');
sections.forEach(section => {
    observer.observe(section);
});

// Habilitar o som ao clicar em um botão
const audio = document.getElementById('background-audio');
window.addEventListener('click', () => {
    if (audio.paused) {
        audio.muted = false;
        audio.play();
    }
});
