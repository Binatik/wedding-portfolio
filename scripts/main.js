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

input.addEventListener('submit', (ev) => {
    const lbs = document.querySelectorAll('.feedback__elem label');
    const rulesFeedback = rules[0].inputFeedback;
    const feedbackElemInput = document.querySelectorAll('.feedback__elem input[data-check]');

    const checkRegValidator = (ev) => {
        let isColor;
        feedbackElemInput.forEach((input, i) => {
            const paragraph = input.parentElement.children[0];
            paragraph.classList.add("invalid-hidden");
            switch (i) {
                case 0:
                    if (rulesFeedback.name.test(input.value)) {
                        isColor = true;
                    }
                    else {
                        paragraph.classList.remove("invalid-hidden");
                        isColor = false;
                        ev.preventDefault();
                    }
                    break;
                case 1:
                    if (rulesFeedback.fam.test(input.value))  {
                        isColor = true;
                    }
                    else {
                        paragraph.classList.remove("invalid-hidden");
                        isColor = false;
                        ev.preventDefault();
                    }
                    break;
                case 2:
                    if (rulesFeedback.tel.test(input.value))  {
                        isColor = true;
                    }
                    else {
                        paragraph.classList.remove("invalid-hidden");
                        isColor = false;
                        ev.preventDefault();
                    }
                    break;

                case 3:
                    if (input.value.length >0)  {
                        isColor = true;
                    }
                    else {
                        paragraph.classList.remove("invalid-hidden");
                        isColor = false;
                        ev.preventDefault();
                    }
                    break;

                default: return null;
            }
            isColor ?
                lbs[i].style.color = '#16c79a' : lbs[i].style.color = 'red';
            isColor ?
                feedbackElemInput[i].style.color = '#16c79a' : feedbackElemInput[i].style.color = 'red';
        });
    };

    feedbackElemInput.forEach((input, i) => {
        const paragraph = input.parentElement.children[0];
        if (input.value && input.value.length > 0) {
            checkRegValidator(ev);
        }
        else {
            paragraph.classList.remove("invalid-hidden");
            console.log(paragraph);
            console.log('Не ок.');
            lbs[i].style.color = 'red';
            ev.preventDefault();
        }
    });
    console.log(stateInputData);
})

