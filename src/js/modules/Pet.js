export class Pet {
    constructor(name, species, age, image, favoriteToy, owner, breed) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.image = image;
        this.favoriteToy = favoriteToy;
        this.owner = owner;
        this.breed = breed;
    }

    displayInfo(container) {
        const card = document.createElement('div');
        card.classList.add('pet-card');
        card.dataset.breed = this.breed;
    
        card.innerHTML = 
        `   <img src="${this.image}" alt="${this.name}" class="pet-image">
            <h2>${this.name}</h2>
            <p>Species: ${this.species}</p>
            <p>Age: ${this.age}</p>
            <p>Favorite Toy: ${this.favoriteToy}</p>
        `;
    
        const image = card.querySelector('.pet-image');
        image.addEventListener('click', () => {
            this.showOwnerPopup();
        });
    
        container.appendChild(card);
    }
    
    showOwnerPopup() {
        const popupCard = document.querySelector('.popup-card');
        const popupContent = document.querySelector('.popup-content');
        popupContent.innerHTML = this.owner.getPopupContent();
        popupCard.classList.remove('hidden');
    }
}

export class Dog extends Pet {
    constructor(name, species, age, image, favoriteToy, owner) {
        super(name, species, age, image, favoriteToy, owner, "Dog");
    }
}

export class Cat extends Pet {
    constructor(name, species, age, image, favoriteToy, owner) {
        super(name, species, age, image, favoriteToy, owner, "Cat");
    }
}

export class SmallAnimal extends Pet {
    constructor(name, species, age, image, favoriteToy, owner) {
        super(name, species, age, image, favoriteToy, owner, "SmallAnimal");
    }
}

export class Bird extends Pet {
    constructor(name, species, age, image, favoriteToy, owner) {
        super(name, species, age, image, favoriteToy, owner, "Bird");
    }
}