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
        `   <img src="${this.image}" alt="${this.name}">
            <h2>${this.name}</h2>
            <p>Species: ${this.species}</p>
            <p>Age: ${this.age}</p>
            <p>Favorite Toy: ${this.favoriteToy}</p>
            <div class="full-profile" style="display: none;"></div>
        `;
        container.appendChild(card);

        // Image click triggers showFullProfile()
        // const img = card.querySelector('.pet-image');
        // img.addEventListener('click', () => {
        //     this.showFullProfile(card.querySelector('.full-profile'));
        // });
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