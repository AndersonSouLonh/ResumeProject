// NAVIGATION MENU
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("show");
});

// SCROLL ANIMATIONS
const selectors = [
    ".experience-card",
    "#intro",
    "#about",
    "#education",
    "#affiliations",
    "#Experiences",
    "#Projects",
    "#Quotes",
    "#PersonalInfo"
];

const elements = document.querySelectorAll(selectors.join(", "));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

elements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});