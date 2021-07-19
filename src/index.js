// hub for all modules to be used
import nav from "./nav.js";

const page = (() => {

    const displayAppend = () => {
        const display = document.querySelector("#content");
        display.appendChild(nav.createNav());
    };
    
    return {displayAppend}
})();

page.displayAppend();