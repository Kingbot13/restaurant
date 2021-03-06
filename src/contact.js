const contact = (() => {
    // create container
    const container = document.createElement('div');

    // create content
    const titleContainer = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = `Contact Info`;
    titleContainer.appendChild(title);

    const phone = document.createElement('p');
    phone.textContent = `123-456-7891`;

    const hours = document.createElement('p');
    hours.textContent = `Our hours are Monday - Saturday 11am - 11pm`;

    const address = document.createElement('p');
    address.textContent = `123 Potato Street 
    Potato, TN 12345`;

    container.append(titleContainer, phone, hours, address);

    return {container};

})();

export default contact;