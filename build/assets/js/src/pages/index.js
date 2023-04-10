function indexInit() {
    const smallBlur = document.querySelector("#smallBlur");
    const titleLockup = document.querySelector("#titleLockup");

    function getAndSetWidth() {
        let distanceToLeftEdge = titleLockup.getBoundingClientRect().left; // The distance from the element with a line to left of screen
        smallBlur.style.width = `${distanceToLeftEdge}px`;
        smallBlur.style.backdropFilter = "blur(8px)";
    }

    window.addEventListener("load", () => {
        smallBlur.style.width = 0;
        smallBlur.style.backdropFilter = "blur(8px)";
        getAndSetWidth();
        // galleryInit();
    });
    window.addEventListener("resize", () => {
        smallBlur.style.width = 0;
        smallBlur.style.backdropFilter = "blur(8px)";
        getAndSetWidth();
    });

    // function galleryInit() {
    Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: {
            type: "modern",
        },
    });

    const thumbnailContainers = document.querySelectorAll(".thumbnail-container");

    thumbnailContainers.forEach((container) => {
        let width = container.scrollWidth;

        container.style.height = `${width}px`;
    });

    let oldWidth = window.innerWidth;

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
