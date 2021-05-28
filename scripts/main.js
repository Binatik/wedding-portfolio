const swiperW = document.querySelector('.swiper-wrapper');
const paginationList = document.querySelector('.pagination__list');

images.map(({url, alt}) => {
    swiperW.innerHTML +=
        ` 
        <div class="swiper-slide">
           <img class="swiper-slide__img" src=${url} alt=${alt}>
        </div> 
        `
});

a.map(({link, title}) => {
    paginationList.innerHTML +=
        ` 
        <li class="pagination__item">
            <a class="pagination__link link" href=${link}>${title}</a>
        </li>
        `
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 15,
    pagination: {
        el: '.swiper-pagination',
    },
});

const acBurger = (burger, dependence) => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        dependence.classList.toggle('pagination__active');
    });
}; acBurger(
    //burger
    document.querySelector('.menu-burger__header'),
    //dependence
    document.querySelector('.pagination')
);