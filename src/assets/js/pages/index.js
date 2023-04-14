function indexInit() {
    const hero = document.querySelector("#hero");
    const smallBlur = document.querySelector("#smallBlur");
    const bigBlur = document.querySelector("#bigBlur");
    const titleLockup = document.querySelector("#titleLockup");
    const screenPrinting = document.querySelector(".screen-printing");
    const embroidery = document.querySelector(".embroidery");
    const vinyl = document.querySelector(".vinyl");

    function getAndSetWidth() {
        let distanceToLeftEdge = titleLockup.getBoundingClientRect().left; // The distance from the element with a line to left of screen
        smallBlur.style.width = `${distanceToLeftEdge}px`;
        smallBlur.style.backdropFilter = "blur(8px)";
    }

    function setSliderHeights() {
        // Select all .carousel-item elements
        const carouselItems = document.querySelectorAll(".carousel-item");

        if (window.innerWidth < 992) {
            // Reset the height of all .carousel-item elements to 'auto'
            carouselItems.forEach((item) => {
                item.style.height = "auto";
            });

            // Find the height of the tallest element
            let maxHeight = 0;

            carouselItems.forEach((item) => {
                if (item.offsetHeight > maxHeight) {
                    maxHeight = item.offsetHeight;
                }
            });

            // Set the height of all .carousel-item elements to be the same as the tallest element
            carouselItems.forEach((item) => {
                item.style.height = `${maxHeight}px`;
            });
        } else {
            carouselItems.forEach((item) => {
                item.style.height = "auto";
            });
        }
    }

    window.addEventListener("load", () => {
        setSliderHeights();
        getAndSetWidth();
        titleLockup.classList.add("animate");
        hero.classList.add("animate");
        smallBlur.classList.add("animate");
        bigBlur.classList.add("animate");
        screenPrinting.classList.add("animate");
        embroidery.classList.add("animate");
        vinyl.classList.add("animate");
    });

    window.addEventListener("resize", () => {
        setSliderHeights();
        getAndSetWidth();
    });

    window.addEventListener("orientationchange", setSliderHeights);

    Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: {
            type: "modern",
        },
    });

    let oldWidth = window.innerWidth;

    const thumbnailContainers = document.querySelectorAll(".thumbnail-container");

    thumbnailContainers.forEach((container) => {
        let width = container.scrollWidth;

        container.style.height = `${width}px`;
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth !== oldWidth) {
            thumbnailContainers.forEach((container) => {
                let width = container.scrollWidth;

                container.style.height = `${width}px`;
            });
            oldWidth = window.innerWidth;
        }
    });

    /* ****************************************************** */
    /*                         RELLAX                         */
    /* ****************************************************** */
    let rellax = new Rellax(".rellax");

    window.addEventListener("load", () => {
        if (window.innerWidth < 992) {
            rellax.destroy();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth < 992) {
            rellax.destroy();
        } else rellax.refresh();
    });
}

/* ============ Only run code if on this page =========== */
if (pageId == "mainIndex") {
    indexInit();
}
