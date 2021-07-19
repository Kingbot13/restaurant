
// hub for all modules to be used
import {navBar} from "nav.js";

const page = (() => {
    const display = document.querySelector("#content");
    navBar();

    display.append(navBar.nav);
})();

page();