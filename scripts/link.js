const tHead = document.head;

const href = [
    'https://fonts.googleapis.com/css2?family=Pattaya&display=swap',
    'https://fonts.gstatic.com',
    'styles/constructor.css',
    'styles/normalize.css',
    'styles/reset.css',
    'styles/swiper.min.css',
];

//connect;
href.forEach((el) => {
    const link = `<link rel="stylesheet" href=${el}>`;
    tHead.insertAdjacentHTML('afterbegin', link);
});