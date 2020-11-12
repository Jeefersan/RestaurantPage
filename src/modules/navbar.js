import {home} from "./home/home";
import {contact} from "./contact";
import {menu} from "./menu/menu";
import {resetContainer} from "./helper";


function setupNavBar() {
    const navItems = Array.from(
        document.querySelector("nav").querySelectorAll("a")
    );
    navItems[0].classList.add("tab-active");
    navItems.forEach(item => item.addEventListener('click', () => setupBtn(item))
    );


}

function setupBtn(btn) {
    const activeBtn = document.querySelector('.tab-active');
    if (btn === activeBtn) {
       return;
    }
    activeBtn.classList.toggle("tab-active");
    btn.classList.toggle("tab-active");

    const navigate = (name) => {
        resetContainer()
        switch (name) {
            case 'btn-home':
                return home();
            case 'btn-menu':
                return menu();
            case 'btn-contact':
                return contact();
            default:
                return home();
        }
    }
    navigate(btn.getAttribute("id"));
}


export {setupNavBar}