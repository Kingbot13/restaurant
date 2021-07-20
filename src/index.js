// hub for all modules to be used
import nav from "./nav.js";
import home from "./homepage";
import menu from "./menu";
import contact from "./contact";
// import mainPotato from "./potatoimg.jpg";
import potatoBackground from "./potatobackground.jpg";
import "./styles.css";

const page = (() => {

    const displayAppend = () => {
        const display = document.querySelector("#content");
        display.appendChild(nav.createNav());

        // add main img
        const mainImg = new Image();
        mainImg.src = potatoBackground;

        // document.body.style.backgroundImage = `url('${mainImg}')`;

        // append homepage on initial load

        display.appendChild(home.container);

        // add click events to nav elements

        const navBar = document.querySelector('nav');

        for (let i = 0; i < navBar.children.length; i++){
            navBar.children[i].addEventListener("click", () => {
                // remove current child
                display.removeChild(display.childNodes[1]);

                //add new child
                switch (navBar.children[i].textContent) {
                    case "Home":
                        display.appendChild(home.container);
                        break;
                    case "Menu":
                        display.appendChild(menu.container);
                        break;
                    case "Contact":
                        display.appendChild(contact.container);
                        break;
                
                    default:
                        break;
                };

            });
        };
    };
    
    return {displayAppend};
})();

page.displayAppend();