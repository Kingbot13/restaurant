// nav bar

const navBar = (() => {
    // create nav element
    let nav = document.createElement('nav');
    // create tab elements
    let home = document.createElement('h2');
    home.textContent = "Home";
    let menu = document.createElement('h2');
    menu.textContent = "Menu";
    let contact = document.createElement('h2');
    contact.textContent = "Contact";
    // append tabs to nav element
    nav.append(home, menu, contact);

    return {nav};
})();

export default navBar();