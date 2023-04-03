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
    });
    window.addEventListener("resize", () => {
        smallBlur.style.width = 0;
        smallBlur.style.backdropFilter = "blur(8px)";
        getAndSetWidth();
    });
}

/* ============ Only run code if on this page =========== */
if (pageId == "mainIndex") {
    indexInit();
}
