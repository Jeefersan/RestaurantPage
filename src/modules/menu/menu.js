import {createElem, getContainer, getStyle} from "../helper";
import {menuItems} from "./content";

function menu() {
    const div = createElem('div');
    div.style.cssText = "display: flex;" + getStyle();
    menuItems.forEach(i => div.innerHTML += createMenuItem(i));
    getContainer().appendChild(div);
}

function createMenuItem(item) {

    const menuItem = `<div>
<div class="container-img"><img alt="Menu item" src="${item.img}"></div>
<div></div>
</div>`

    return ``;
}


export {menu}