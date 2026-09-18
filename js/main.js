/* =========================================
   VELOCITY MOTORS
   Main JavaScript
========================================= */


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .model-card, .performance-item, .tech-item, .contact-content"
);

revealElements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = `${index * 0.08}s`;
});

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}
/* =========================================
   PERFORMANCE NUMBER REVEAL
========================================= */

const performanceItems = document.querySelectorAll(".performance-item");

const performanceObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("number-visible");

                performanceObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.3
    }
);

performanceItems.forEach((item) => {
    performanceObserver.observe(item);
});
/* =========================================
   HERO MOUSE PARALLAX
========================================= */

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

if (hero && heroContent && window.matchMedia("(pointer: fine)").matches) {

    hero.addEventListener("mousemove", (event) => {

        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        heroContent.style.transform = `
            translate(${x * 8}px, ${y * 6}px)
        `;

    });

    hero.addEventListener("mouseleave", () => {

        heroContent.style.transform = "translate(0, 0)";

    });

}