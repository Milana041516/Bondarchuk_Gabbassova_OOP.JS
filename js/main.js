import { pets } from './modules/data.js';
import { filter } from './modules/filter.js';
import { animateCards } from './modules/gsap.js';

const container = document.querySelector('.pets-container');

pets.forEach(pet => {
    pet.displayInfo(container);
});

animateCards();

filter();