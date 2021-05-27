const swiperW = document.querySelector('.swiper-wrapper');
const pagination = document.querySelector('.pagination__list');

images.map(({url, alt}) => {
    swiperW.innerHTML +=
        ` 
        <div class="swiper-slide">
           <img class="swiper-slide__img" src=${url} alt=${alt}>
        </div> 
        `
});

pagination.map(({link, title}) => {
    swiperW.innerHTML +=
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