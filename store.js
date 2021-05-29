let stateInputData = {

};

const rules = {
    inputFeedback: {
        name: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
        fam: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
        tel: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
        message: /./
    }
}

const headerSliders = [
    {
        url: 'images/mainSlider1.jpg',
        alt: 'свадьба',
        content: {
            title: 'Jose Villa',
            text: 'PHOTOGRAPHY'
        },
    },
    {
        url: 'images/mainSlider1.jpg',
        alt: 'свадьба',
        content: {
            title: 'Jose Villa',
            text: 'PHOTOGRAPHY'
        },
    },
    {
        url: 'images/mainSlider1.jpg',
        alt: 'свадьба',
        content: {
            title: 'Jose Villa',
            text: 'PHOTOGRAPHY'
        },
    },
    {
        url: 'images/mainSlider1.jpg',
        alt: 'свадьба',
        content: {
            title: 'Jose Villa',
            text: 'PHOTOGRAPHY'
        },
    },
]

const a = [
    {
        link: '#',
        title: 'Главная'
    },
    {
        link: '#',
        title: 'Обо мне'
    },
    {
        link: '#',
        title: 'Услуги'
    },
    {
        link: '#',
        title: 'Портфолио'
    },
    {
        link: '#',
        title: 'Контакты'
    },
]

const feedback = [
    {
        id: 'name',
        for: 'name',
        type: 'text',
        title: 'Имя',
        placeholder: 'Имя',
        required: true,
        data: 'name',
    },

    {
        id: 'fam',
        forID: 'fam',
        type: 'text',
        title: 'Фамилия',
        placeholder: 'Фамилия',
        required: true,
        data: 'fam',
    },

    {
        id: 'tel',
        for: 'tel',
        type: 'text',
        title: 'Телефон',
        placeholder: 'Телефон',
        required: true,
        data: 'tel',
    },

    {
        id: 'text',
        for: 'text',
        type: 'text',
        title: 'Сообщение',
        placeholder: 'Сообщение',
        required: true,
        data: 'message',
    },
]

const persons = [
    {
        id: 'Аделина',
        a: [
            {
                href: '#',
                svg:
                    {
                        path: `M512 97c-19 9-39 14-60 17 21-13 38-34 46-58-21 12-43 20-67 25a105 105 0 00-179 96c-87-4-164-46-216-110a106 106 0 0032 140c-17 0-34-5-48-13v2c0 51 37 93 85 103a105 105 0 01-48 1c14 42 52 73 98 74A211 211 0 010 417c46 30 102 47 161 47a297 297 0 00298-312c21-15 39-34 53-55z`,
                        xmlns: 'http://www.w3.org/2000/svg'
                    }
            },
            {
                href: '#',
                svg:
                    {
                        path: `M512 97c-19 9-39 14-60 17 21-13 38-34 46-58-21 12-43 20-67 25a105 105 0 00-179 96c-87-4-164-46-216-110a106 106 0 0032 140c-17 0-34-5-48-13v2c0 51 37 93 85 103a105 105 0 01-48 1c14 42 52 73 98 74A211 211 0 010 417c46 30 102 47 161 47a297 297 0 00298-312c21-15 39-34 53-55z`,
                        xmlns: 'http://www.w3.org/2000/svg'
                    }
            },
            {
                href: '#',
                svg:
                    {
                        path: `M512 97c-19 9-39 14-60 17 21-13 38-34 46-58-21 12-43 20-67 25a105 105 0 00-179 96c-87-4-164-46-216-110a106 106 0 0032 140c-17 0-34-5-48-13v2c0 51 37 93 85 103a105 105 0 01-48 1c14 42 52 73 98 74A211 211 0 010 417c46 30 102 47 161 47a297 297 0 00298-312c21-15 39-34 53-55z`,
                        xmlns: 'http://www.w3.org/2000/svg'
                    }
            }
        ],
        links: [
            {
                title: 'Телефон',
                contact: '+7903 771 45 46',
                // link: {
                //     twitter: '#',
                //     instagram: '#',
                //     test: '#'
                // },
            },
            {
                title: 'Email',
                contact: 'JoseVilla@gmail.com',
                // link: {
                //     twitter: '#',
                //     instagram: '#',
                //     test: '#'
                // },
            },
        ],
        text: {
            '1': 'Не стесняйтесь обращаться ко мне',
            '2': 'и выбирать любой удобный способ связи:',
        },
        desc: {
            AboutMe: 'Обо мне',
            textList: {
                '1': `Фотография – это важная часть моей жизни. 
                      Первый раз я взяла в руки камеру после рождения моего сына, 
                      и вот уже 8 лет фотография для меня – полноценная работа,
                      которая не только приносит огромное удовольствие, 
                      но и позволяет мне зарабатывать.
                     `,
                '2': `Свой стиль я бы описала как "улучшенная реальность". 
                      Многие зрители считают мои фотографии сказочными, 
                      однако не смотря на яркие краски, сюжеты в кадре
                      вполне реалистичны.
                     `,
            }
        }
    }
]