const tHead = document.head;

const href = [
    'styles/swiper.min.css',
    'styles/reset.css',
    'styles/normalize.css',
    'styles/constructor.css',
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com/css2?family=Pattaya&display=swap',
];

const LinkSwiper = `<link rel="stylesheet" href=${href[0]}>`;
const reset = `<link rel="stylesheet" href=${href[1]}>`;
const normalize = `<link rel="stylesheet" href=${href[2]}>`;
const constructor = `<link rel="stylesheet" href=${href[3]}>`;
const fontsStatic = `<link rel="preconnect" href=${href[4]}>`;
const fontsFamily = `<link href=${href[5]} rel="stylesheet">`
//connect styles;

tHead.insertAdjacentHTML('afterbegin', fontsFamily);
tHead.insertAdjacentHTML('afterbegin', fontsStatic);
tHead.insertAdjacentHTML('afterbegin', constructor);
tHead.insertAdjacentHTML('afterbegin', normalize);
tHead.insertAdjacentHTML('afterbegin', reset);
tHead.insertAdjacentHTML('afterbegin', LinkSwiper);