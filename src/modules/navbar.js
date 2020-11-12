import {home} from "./home/home";
import {contact} from "./contact";
import {menu} from "./menu";
import {resetContainer} from "./helper";


function setupNavBar() {
    const navItems = Array.from(
        document.querySelector("nav").querySelectorAll("a")
    );

    navItems[0].addEventListener('click', () => {
        resetContainer();
        home();
    });
    navItems[1].addEventListener('click', () => {
        resetContainer();
        menu();
    });
    navItems[2].addEventListener('click', () => {
        resetContainer();
        contact();
    });
}


export {setupNavBar}