const swiperW = document.querySelector('.swiper-wrapper');
const paginationList = document.querySelector('.pagination__list');
const input = document.querySelector('.input');
const headerBurger = document.querySelector('.menu-burger__header');

headerSliders.map(({
url, alt, content
}) => {
    swiperW.innerHTML +=
        ` 
        <div class="swiper-slide">
           <img class="swiper-slide__img" src=${url} alt=${alt}> 
           <div class="h-content">
                <h1 class="h-content__title global-title">${content.title}</h1>
                <p class="h-content__text global-text">${content.text}</p>
           </div>
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
    burger.classList.toggle('active');
    dependence.classList.toggle('pagination__active');
    return burger.classList.contains('active');
}

headerBurger.addEventListener('click', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isBurgerOpened = acBurger(headerBurger, document.querySelector('.pagination'))

        //click
        if (scrollTop >= 400 && isBurgerOpened) {
            headerBurger.classList.remove('active');
            document.querySelector('.pagination').classList.remove('pagination__active');
            document.querySelector('.pagination').classList.remove('pagination__active');

            window.scrollTo(0, 0);
            setTimeout(() => {
                headerBurger.classList.add('active');
                document.querySelector('.pagination').classList.add('pagination__active');
            }, 500);

        }
});

window.addEventListener('scroll', (() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //scroll
    if (scrollTop >= 400) {
        headerBurger.classList.remove('active');
        document.querySelector('.pagination').classList.remove('pagination__active');
    }
}));