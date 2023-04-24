/* ======================== BASE ======================== */
import ie10 from "./base/ie10-viewport-bug-workaround.js";
ie10();

import modernizrInit from "./base/modernizr-webp.js";
modernizrInit();

// Bootstrap - not using full js bundle, see below
//  "../../../node_modules/bootstrap/dist/js/bootstrap.js";

import AOS from "aos";
AOS.init();

// import Popper from "popper.js";

/* ===================== COMPONENTS ===================== */
import currentYear from "./components/current-year.js";
currentYear();

import ehElementsInit from "./components/eh-elements.js";
ehElementsInit();

import navbarInit from "./components/navbar.js";
navbarInit();

/* ======================== PAGES ======================= */
import indexInit from "./pages/index.js";
indexInit();
