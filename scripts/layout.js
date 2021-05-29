const swiperW = document.querySelector('.swiper-wrapper');
const paginationList = document.querySelector('.pagination__list');
const input = document.querySelector('.input');
const headerBurger = document.querySelector('.menu-burger__header');
const feedbackPerson = document.querySelector('.desc');
const footer = document.querySelector('.footer');

headerSliders.map(({
url, alt, content
                   }) => {
    swiperW.innerHTML +=
        ` 
        <div class="swiper-slide">
           <img class="swiper-slide__img" src=${url} alt=${alt}> 
           <div class="h-content">
                <h1 class="absolute h-content__title global-title disabled-link">${content.title}</h1>
                <p class="absolute h-content__text global-text disabled-link">${content.text}</p>
           </div>
        </div> 
        `;
});

a.map(({
link, title
       }) => {
    paginationList.innerHTML +=
        ` 
        <li class="pagination__item">
            <a class="pagination__link link" href=${link}>${title}</a>
        </li>
        `;
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
            ${required ? `data-required="true"` : null}>
            <label class="disabled-link" for=${forID}>${title}</label>
        </div> 
        `;
})

input.innerHTML +=
    `<input class="feedback__button button-md center-items-f" type="submit" value="Отправить">`;

persons.map((person) => {

    //РАБОТАЕТ!
    // Object.values(person.text).map((tmp ) => {
    //     feedbackPerson.innerHTML +=
    //     `
    //     <p class="feedback__text">${tmp}</p>
    //     `;
    // });

    // Не работает
    // feedbackPerson.innerHTML +=
    //     `
    //     <div class="feedback__contact-group between-items-f wrap-f">
    //         ${person.links.map(({contact, title}) => {
    //         feedbackPerson.innerHTML +=
    //             `
    //             <div class="feedback__contact">
    //                 <h3 class="feedback__contact-title">${title}</h3>
    //                 <p class="feedback__contact-text">${contact}</p>
    //             </div>
    //             `
    //         })}
    //     </div>
    //     `;

    // Не работает
    // person.a.map((el) => {
    //     feedbackPerson.innerHTML +=
    //         `
    //          <a class="feedback__link" href=${el.href}>
    //             <svg class="feedback__link-svg"
    //             xmlns=${el.svg.xmlns}
    //             viewBox="0 0 512 512">
    //             <path d=${el.svg.path}/>
    //             </svg>
    //          </a>
    //         `
    // });
})


footer.innerHTML +=
    ` 
    <div class="h-content center-items-f agn-c coMD-f">
        <h1 class="h-content__title global-title disabled-link" style="margin: 0">Jose Villa</h1>
        <p class="h-content__text global-text disabled-link" style="font-size: 32px">PHOTOGRAPHY</p>
    </div>
    `;



