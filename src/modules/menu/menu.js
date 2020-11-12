import {createElem, getContainer, getStyle} from "../helper";
import {menuItems} from "./content";

function menu() {
    const div = createElem('div');
    div.setAttribute('class', 'container-grid');
    menuItems.forEach(i => div.innerHTML += createMenuItem(i));
    getContainer().appendChild(div);
}

function createMenuItem(item) {
    return `<div class="container-item">
      <div class="container-img">
        <img alt="Menu item" src="${item.img}"/>
      </div>
      <div class="container-item-info">
        <div class="item item-name">${item.name}</div>
        <div class="item item-price">${item.price}</div>
        <div class="item item-description"><p>${item.description}</p></div>
    </div>`;
}


export {menu}