/* ************************************************* */
/*          TRIGGER POPUP MODAL ON PAGE LOAD         */
/* ************************************************* */
function triggerPopup(modalId) {
    window.onload = () => {
        let popup = new bootstrap.Modal(modalId);

        popup.show();
    };
}
