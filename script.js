// Scroll animations
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});
