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
                <h1 class="h-content__title global-title disabled-link">${content.title}</h1>
                <p class="h-content__text global-text disabled-link">${content.text}</p>
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
id, forID, type, title, placeholder, required, data
              }) => {
    input.innerHTML +=
        ` 
        <div class="feedback__elem">
            <input  
            type=${type}  
            id=${id}  
            placeholder=${placeholder}   
            data-check=${data}
            ${required ? `data-rule="required"` : null}>
            <label class="disabled-link" for=${forID}>${title}</label>
        </div> 
        `
})

input.innerHTML +=
    `<input class="feedback__button button-md center-items-f" type="submit" value="Отправить">`;