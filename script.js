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

// Project Navigation
let currentProject = 0;
const projectCards = document.querySelectorAll('.project-card');

function navigateProjects(direction) {
    // Hide the current project
    projectCards[currentProject].classList.remove('active');

    if (direction === 'left') {
        currentProject = (currentProject === 0) ? projectCards.length - 1 : currentProject - 1;
    } else if (direction === 'right') {
        currentProject = (currentProject === projectCards.length - 1) ? 0 : currentProject + 1;
    }

    // Show the new current project
    projectCards[currentProject].classList.add('active');
}

function jumpToProject(index) {
    // Hide the current project
    projectCards[currentProject].classList.remove('active');
    indicators[currentProject].classList.remove('active');

    // Update current project
    currentProject = index;

    // Show the selected project
    projectCards[currentProject].classList.add('active');
    indicators[currentProject].classList.add('active');
}