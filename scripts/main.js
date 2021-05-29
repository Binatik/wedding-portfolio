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

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //scroll
    if (scrollTop >= 400) {
        headerBurger.classList.remove('active');
        document.querySelector('.pagination').classList.remove('pagination__active');
    }
})

const rulesFeedback = rules.inputFeedback;
const labels = document.querySelectorAll('.feedback__elem label');
const feedbackElemInputs = document.querySelectorAll('.feedback__elem input[data-check]');

feedbackElemInputs.forEach((input, i) => {
    input.addEventListener('change', () => {
        const validateKey = input.dataset.check;
        //const paragraph = input.parentElement.children[0];

        if (!rulesFeedback[validateKey]) {
            return;
        }

        if (input.value && rulesFeedback[validateKey].test(input.value)) {
            labels[i].style.color = '#16c79a';
            input.style.color = '#16c79a';
            input.classList.remove('invalid');
            // paragraph.classList.add("invalid-hidden");
        } else {
            labels[i].style.color = 'red';
            input.style.color = 'red';
            input.classList.add('invalid');
            // paragraph.classList.remove("invalid-hidden");
        }
    });
});

input.addEventListener('submit', (event) => {
    const alertList = document.querySelector('.alert');
    let hasInvalidInputs = false;

    const acAlert = (timer, text, isReject) => {
        if (isReject) {
            alertList.classList.add('alert__active');
            alertList.textContent = text;

            setTimeout(() => {
                alertList.classList.remove('alert__active');
            }, timer);
        }
        else {
            alertList.classList.add('alert__active');
            alertList.textContent = text;

            setTimeout(() => {
                alertList.classList.remove('alert__active');
            }, timer);
        }
    }

    feedbackElemInputs.forEach((input) => {
        const isValid = !input.dataset.required || input.value;
        const validateKey = input.dataset.check;

        if (!isValid || input.classList.contains('invalid')) {
            hasInvalidInputs = true;
        }
        else {
            //Если валиден
            stateInputData[validateKey] = input.value;
            acAlert(2000, 'Данные отправлены', !hasInvalidInputs);
        }
    })

    if (hasInvalidInputs) {
        event.preventDefault();
        stateInputData = {};
        acAlert(2000, 'Ошибка', hasInvalidInputs);
    }
    event.preventDefault();

    console.log(stateInputData);
});

