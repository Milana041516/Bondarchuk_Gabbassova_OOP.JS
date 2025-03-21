import { animateCardsfilter } from './gsap.js';

export function filter() {
    const categoryLinks = document.querySelectorAll('.category-link');
    const allCards = document.querySelectorAll('.pet-card');

    categoryLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const breed = link.dataset.breed;
            animateCardsfilter();

            allCards.forEach(card => {
                if (breed === 'All' || card.dataset.breed === breed) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

