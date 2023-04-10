function indexInit() {
    const smallBlur = document.querySelector("#smallBlur");
    const titleLockup = document.querySelector("#titleLockup");

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

    function passHandler(event) {
        window.addEventListener(event, setSliderHeights);
    }

    passHandler("load");
    passHandler("resize");
    passHandler("orientationchange");

    window.addEventListener("load", () => {
        smallBlur.style.width = 0;
        smallBlur.style.backdropFilter = "blur(8px)";
    });

    window.addEventListener("resize", () => {
        smallBlur.style.width = 0;
        smallBlur.style.backdropFilter = "blur(8px)";
        getAndSetWidth();
    });

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
}

/* ============ Only run code if on this page =========== */
if (pageId == "mainIndex") {
    indexInit();
}
