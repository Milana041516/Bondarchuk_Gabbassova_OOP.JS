export class Owner {
    constructor(name, image, description) {
        this.name = name;
        this.image = image;
        this.description = description;
    }

    getPopupContent() {
        return `
            <img src="${this.image}" alt="${this.name}">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
        `;
    }
}
