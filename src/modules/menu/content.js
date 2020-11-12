class MenuItem {
    constructor(name, description, price, img) {
        this.name = name;
        this.description = description;
        this.price = `$${price}`;
        this.img = img;
    }
}

const item1 = new MenuItem("Salmon Mix", "For the real salmon lovers only", "16,95", "../images/1.png");
const item2 = new MenuItem("Special California", "This is our recommended special roll. It's just amazing. Try it!", "18,95", "../images/2.png");
const item3 = new MenuItem("Kids Duo Mix", "Kids love sushi too! Great for two.", "14,95", "../images/3.png");
const item4 = new MenuItem("Catch of the Day Mix", "Fresh caught, straight from the ocean. Includes six pieces of Toro sushi, also known as the Bluefin Tuna.", "24,95", "../images/4.png");
const item5 = new MenuItem("Flying Salmon Roe", "This is the real deal.", "12,95", "../images/5.png");
const item6 = new MenuItem("Vegan Only Mix", "For the real vegans among us", "14,95", "../images/6.png");
const item7 = new MenuItem("Salmon Flambée Uramaki", "Torched salmon with King Crab meat inside. Very delicious", "16,95", "../images/7.png");
const item8 = new MenuItem("Sashimi Party Boat", "For the real sashimi lovers among us. This sashimi boat will leave you and your guests very impressed.", "39,95", "../images/8.png");

const menuItems = [item1,item2, item3, item4, item5, item6, item7, item8];

export {menuItems}