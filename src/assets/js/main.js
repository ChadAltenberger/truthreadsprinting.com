/* ======================== BASE ======================== */
import ie10 from "./base/ie10-viewport-bug-workaround.js";
ie10();

import modernizrInit from "./base/modernizr-webp.js";
modernizrInit();

/* ========================= NPM ======================== */
import AOS from "aos";
AOS.init();

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
