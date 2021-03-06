function createElem(elem) {
    return document.createElement(elem);
}

function createHeader(title){
    const header = createElem('header');
    header.textContent = title;
    return header;
}

function getStyle() {
    return 'border-radius: 4px; margin: 8px';
}

function getContainer() {
    return document.querySelector("#content")
}

function resetContainer() {
    getContainer().innerHTML = "";
    getContainer().textContent = "";
}

export {getStyle, createElem, createHeader, getContainer, resetContainer};