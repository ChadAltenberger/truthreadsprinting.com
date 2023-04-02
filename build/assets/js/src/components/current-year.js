/* ************************************************* */
/*               CURRENT YEAR IN FOOTER              */
/* ************************************************* */
(function () {
    year = new Date().getYear();
    if (year < 1900) year += 1900;
    document.getElementById("currentYear").innerHTML = year;
})();
