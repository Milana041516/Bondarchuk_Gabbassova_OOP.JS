export function animateCards() {
    const petCards = document.querySelectorAll('.pet-card');

    gsap.set(petCards, {
        opacity: 0,
        y: 50
    });

    gsap.to(petCards, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2 
    });
}

export function animateCardsfilter() {
    const petCards = document.querySelectorAll('.pet-card');

    gsap.set(petCards, {
        opacity: 0,
        y: 50
    });

    gsap.to(petCards, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
    });
}