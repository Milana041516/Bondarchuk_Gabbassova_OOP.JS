import { pets } from './modules/data.js';
import { filter } from './modules/filter.js';
import { animateCards } from './modules/gsap.js';

const container = document.querySelector('.pets-container');
pets.forEach(pet => {
    pet.displayInfo(container);
});

const popupCard = document.querySelector('.popup-card');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    popupCard.classList.add('hidden');
});


animateCards();
filter();