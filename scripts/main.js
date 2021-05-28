const swiperW = document.querySelector('.swiper-wrapper');
const paginationList = document.querySelector('.pagination__list');
const input = document.querySelector('.input');

images.map(({
url, alt
}) => {
    swiperW.innerHTML +=
        ` 
        <div class="swiper-slide">
           <img class="swiper-slide__img" src=${url} alt=${alt}>
        </div> 
        `
});

a.map(({
link, title
}) => {
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

feedback.map(({
id, forID, type, title, placeholder
}) => {
    input.innerHTML +=
        ` 
        <div class="feedback__elem">
            <input type=${type} id=${id} placeholder=${placeholder}>
            <label class="disabled-link" for=${forID}>${title}</label>
        </div>
        `
})

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