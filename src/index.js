// hub for all modules to be used
import nav from "./nav.js";
import home from "./homepage";

const page = (() => {

    const displayAppend = () => {
        const display = document.querySelector("#content");
        display.appendChild(nav.createNav());

        // append homepage on initial load

        display.appendChild(home.container);
    };
    
    return {displayAppend}
})();

page.displayAppend();