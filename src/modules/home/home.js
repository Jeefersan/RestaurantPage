import {getContainer, getStyle, createElem, createHeader} from "../helper";
import {aboutContent, openingHours} from "./content";

function home() {
    const aboutDiv = createElem('div');
    aboutDiv.appendChild(createAboutSection());
    aboutDiv.style.width = '70%';

    const hoursDiv = createElem('div');
    hoursDiv.appendChild(createHoursSection());
    hoursDiv.style.textAlign = 'center';

    getContainer().appendChild(aboutDiv);
    getContainer().appendChild(hoursDiv);
}

function createAboutSection() {
    const div = createSection();
    const header = createHeader("About us")

    const para = createElem('p');
    para.textContent = aboutContent();

    div.appendChild(header);
    div.appendChild(para);

    div.style.cssText += ""

    return div;
}

const createHoursSection = () => {
    const div = createSection();
    const header = createHeader("Opening hours");
    const table = createElem('table');
    const days = openingHours();

    days.forEach(day => {
        const row = createElem('tr');
        day.forEach((d) => {
            const cell = createElem('td');
            cell.textContent = d;
            row.appendChild(cell);
        })
        table.appendChild(row);
    })

    table.style.cssText = "width: 100%";

    div.appendChild(header);
    div.appendChild(table);
    return div;
}

const createSection = () => {
    const div = createElem('div');
    div.style.cssText = `display: inline-block; padding: 8px 24px; height: 90%;min-height: 220px; background-color: rgba(255, 255, 255, 0.60);${getStyle()}`;
    return div;
}

export {home}