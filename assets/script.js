/* ==================================================
   MOBILE MENU
================================================== */

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");


menuButton.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

    });

});


/* ==================================================
   HEADER GLASS EFFECT
================================================== */

const header = document.querySelector(".nav-container");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background =
            "rgba(15, 15, 15, 0.78)";

        header.style.boxShadow =
            "0 12px 45px rgba(0,0,0,0.45)";

    } else {

        header.style.background =
            "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.035))";

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.35)";

    }

});


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .work-card, .project-card, .about-content, .contact-section"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});


/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".desktop-nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 250) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});