import {getContainer, getStyle, createElem, createHeader} from "../helper";
import {aboutContent, openingHours} from "./content";

function home() {
    const aboutDiv = createElem('div');
    aboutDiv.appendChild(createAboutSection());
    aboutDiv.style.width = '45%';

    const hoursDiv = createElem('div');
    hoursDiv.appendChild(createHoursSection());
    hoursDiv.style.width = '45%';
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
    div.style.cssText = `display: inline-block; padding: 8px 16px; height: 100%; ${getStyle()}`;
    return div;
}

export {home}