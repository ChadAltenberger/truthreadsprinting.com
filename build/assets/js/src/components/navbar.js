const navbar = document.querySelector("#mainNav");
const contactLink = document.querySelector(".contact-link");
const featuredLink = document.querySelector(".featured-link");
const aboutLink = document.querySelector(".about-link");
const servicesLink = document.querySelector(".services-link");
const homeLink = document.querySelector(".home-link");
const navLinks = document.querySelectorAll(".nav-link");
let scrolled = false;

// Navbar Effect
// Adds background to navbar upon scrolling down

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

let prevScrollPos = window.pageYOffset;
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
        // target which point in scrolling down to trigger effect
        navbar.classList.remove("bg-transparent"); // remove transparency
        navbar.classList.add("bg-primary", "shadow"); // bring navbar forward
    } else {
        navbar.classList.remove("bg-primary", "shadow");
        navbar.classList.add("bg-transparent");
    }

    // Allow for active state on Contact link (Featured still in viewport with Contact Form visible)
    // If scrolled to the bottom of the page...
    if (window.scrollY + window.innerHeight == document.documentElement.scrollHeight) {
        contactLink.classList.add("active");
        navLinks.forEach((link) => {
            if (!link.classList.contains("contact-link")) {
                link.classList.add("inactive");
            }
        });
    } else {
        contactLink.classList.remove("active");
        navLinks.forEach((link) => {
            if (!link.classList.contains("contact-link")) {
                link.classList.remove("inactive");
            }
        });
    }
});
