class MenuItem{
    constructor(name, description, img){
        this.name = name;
        this.description = description;
        this.img = img;
    }
}

const itemOne = new MenuItem("Salmon Mix", "For the real salmon lovers only", "../images/1.png");

const menuItems = [itemOne];

export {menuItems}