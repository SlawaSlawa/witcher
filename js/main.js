'use strict';

// SLIDER
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.arrow',
    },
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        540: {
            slidesPerView: 2
        }
    }
});
// SLIDER END

// BURGER
const menuButton = document.querySelector('.menu-btn'),
    menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-btn-active');
});
// BURGER END
