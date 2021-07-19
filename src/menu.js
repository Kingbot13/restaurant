// menu page

const menu = (() => {
    // create div container
    const container = document.createElement('div');

    // create title container
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = Menu;
    titleContainer.appendChild(title);

    // menu items

    const itemContainer1 = document.createElement('div');
    const itemName1 = document.createElement('h3');
    itemName1.textContent = `Name 1`;
    const itemDescript1 = document.createElement('p');
    itemDescript1.textContent = `item description`;
    // add image
    itemContainer1.append(itemName1, itemDescript1);
    
    const itemContainer2 = document.createElement('div');
    const itemName2 = document.createElement('h3');
    itemName2.textContent = `Name 1`;
    const itemDescript2 = document.createElement('p');
    itemDescript2.textContent = `item description`;
    // add image
    itemContainer2.append(itemName2, itemDescript2);

    const itemContainer3 = document.createElement('div');
    const itemName3 = document.createElement('h3');
    itemName3.textContent = `Name 1`;
    const itemDescript3 = document.createElement('p');
    itemDescript3.textContent = `item description`;
    // add image
    itemContainer3.append(itemName3, itemDescript3);

    container.append(titleContainer, itemContainer1, itemContainer2, itemContainer3);

    return {container};
})();

export default menu;