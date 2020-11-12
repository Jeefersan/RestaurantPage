function createElem(elem) {
    return document.createElement(elem);
}

function createHeader(title){
    const header = createElem('header');
    header.textContent = title;
    return header;
}

function getStyle() {
    return 'background-color: rgba(255, 255, 255, 0.60); border-radius: 4px; margin: 8px';
}

function getContainer() {
    return document.querySelector("#content")
}

function resetContainer() {
    getContainer().innerHTML = "";
    getContainer().textContent = "";
}

export {getStyle, createElem, createHeader, getContainer, resetContainer};