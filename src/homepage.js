// DOM for homepage of restaurant project

const homepage = (() => {
    // main div container
    const container = document.createElement('div');
    // content to append to container

    // title
    const titleContainer =  document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = `Title`;
    titleContainer.appendChild(title);

    // homepage copywriting
    const text = document.createElement('p');
    text.textContent = `Welcome, Have a look around at our tasty selection. We know your tastebuds 
    will be begging you to try our food. So what are you waiting for? 
    If you're tired of being hungry, stop by or place an order over 
    the phone!`;

    container.append(titleContainer, text);

    return {container};

})();


export default homepage;