import { preloader } from './helper';

export const sendForm = ({ formId, url, someElem = [] }) => {
    const form = document.getElementById(formId);

    preloader(); // В разработке

    // = = = = = = = = = = = = = = = =

    const loadText = 'Загрузка...';
    const errorText = 'Произошла ошибка.';
    const succesText = 'Спасибо! Наш менеджер свяжется с вами.';
    const uncorrectText = 'Неверный формат введенных данных.';

    // = = = = = = = = = = = = = = = =

    const sendData = data => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json());
    };

    const checkCorrectValues = list => {
        list.forEach(input => {
            switch (input.getAttribute('name')) {
                case 'user_email':
                    if (/([A-z0-9\-\.])+@(\w+\.)+\w+/.test(input.value)) {
                        input.classList.add('succes');
                    } else {
                        input.classList.remove('succes');
                    }
                    break;

                case 'user_phone':
                    if (/\+?[7-8]\(?[0-9]{3}\)?[0-9]{3}\-?[0-9]{2}\-?[0-9]{2}/.test(input.value)) {
                        input.classList.add('succes');
                    } else {
                        input.classList.remove('succes');
                    }
                    break;
                case 'user_name':
                    if (/[А-я ]/.test(input.value)) {
                        input.classList.add('succes');
                    } else {
                        input.classList.remove('succes');
                    }
                    break;
                default:
                    input.classList.add('succes');
            }
        });
    };

    const isCorrectValidate = () => {
        const list = form.querySelectorAll('input');
        let isCorrect = true;

        checkCorrectValues(list);

        list.forEach(input => {
            if (!input.classList.contains('succes')) {
                isCorrect = false;
            }
        });
        return isCorrect;
    };

    const submitForm = () => {
        const statusBlock = document.createElement('div');
        statusBlock.textContent = loadText;
        statusBlock.style.color = 'white';
        statusBlock.style.marginTop = '10px';
        form.append(statusBlock);

        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(item => {
            const elem = document.getElementById(item.id);
            if (item.type === 'block') {
                formBody[item.id] = elem.textContent;
            } else if (item.type === 'input') {
                formBody[item.id] = elem.value;
            }
        });

        if (isCorrectValidate()) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = succesText;
                    const formInputs = form.querySelectorAll('input');
                    formInputs.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            statusBlock.textContent = uncorrectText;
        }
        setTimeout(() => statusBlock.remove(), 2500);
    };

    try {
        if (!form) {
            throw new Error('Не найдена форма по ID.');
        }
        form.addEventListener('submit', e => {
            e.preventDefault();

            submitForm();
        });
    } catch (error) {
        console.error(error.message);
    }
};
