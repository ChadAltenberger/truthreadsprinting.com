import { Offcanvas } from "bootstrap";

export default function navbarInit() {
    const navbar = document.querySelector("#mainNav");
    const contactLink = document.querySelector(".contact-link");
    const navLinks = document.querySelectorAll(".nav-link");

    const bsOffcanvas = new Offcanvas("#offcanvasNavbar");

    // Adds background to navbar upon scrolling down
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
        // If scrolled to within the last 95% of the page...
        if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight * 0.95) {
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

    function toggleOffcanvas() {
        navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                setTimeout(() => {
                    bsOffcanvas.hide();
                }, 400);
            });
        });
    }

    function passHandler(event) {
        let oldWidth = window.innerWidth;
        window.addEventListener(event, () => {
            if (event === "load") {
                toggleOffcanvas();
            } else if (event === "resize") {
                if (window.innerWidth < 992 && window.innerWidth !== oldWidth) {
                    toggleOffcanvas;
                    oldWidth = window.innerWidth;
                }
            }
        });
    }

    passHandler("load");
    passHandler("resize");
}
