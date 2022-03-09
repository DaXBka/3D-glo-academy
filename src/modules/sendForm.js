export const sendForm = ({ formId, url, someElem = [] }) => {
    const form = document.getElementById(formId);
    const formInputs = form.querySelectorAll('input');

    const loadText = 'Загрузка...';
    const errorText = 'Произошла ошибка.';
    const succesText = 'Спасибо! Наш менеджер свяжется с вами.';
    const uncorrectText = 'Неверный формат введенных данных.';

    let statusBlock = document.createElement('div');
    let statusTextBlock = document.createElement('div');

    const preloader = () => {
        statusBlock.style.cssText = `
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.3);
            width: 100vw;
            height: 100vh;
            z-index: 99999;
    `;

        statusTextBlock.textContent = loadText;
        statusTextBlock.style.cssText = `
            border: 4px solid lightgrey;
            box-shadow: 0px 0px 43px 9px rgba(227, 227, 227, 0.78);
            background-color: rgba(255, 255, 255, 1);
            border-radius: 35px;
            padding: 15px 30px;
            width: 40%;
            position: relative;
            top: calc(50% - 30px);
            color: black;
            left: calc(50% - 20%);
    `;
        statusBlock.append(statusTextBlock);
        document.body.append(statusBlock);
    };

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

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        const formBody = {};

        preloader();

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
                    statusTextBlock.textContent = succesText;
                    statusTextBlock.style.borderColor = 'green';
                    statusTextBlock.style.boxShadow = '0px 0px 43px 9px rgba(129, 255, 107, 0.78)';
                    formInputs.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusTextBlock.textContent = errorText;
                    statusTextBlock.style.borderColor = 'red';
                    statusTextBlock.style.boxShadow = '0px 0px 43px 9px rgba(253, 102, 102, 0.78)';
                });
        } else {
            statusTextBlock.textContent = uncorrectText;
            statusTextBlock.style.borderColor = 'red';
            statusTextBlock.style.boxShadow = '0px 0px 43px 9px rgba(253, 102, 102, 0.78)';
        }
        setTimeout(() => {
            statusBlock.innerHTML = '';
            statusBlock.style.display = 'none';
        }, 3000);
    });
};
