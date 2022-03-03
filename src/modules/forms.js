const formValidation = () => {
    (function () {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0\-]+|[\s\uFEFF\xA0\-]+$/g, '');
        };
    })();

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');
    const calcForm = document.querySelectorAll('.calc-item');

    const correctForm = form => {
        const fixInputValue = val => {
            if (val.value) {
                switch (val.getAttribute('name')) {
                    case 'user_name':
                        val.value = val.value.replace(/[^A-zА-я ]/g, '');
                        break;
                    case 'user_email':
                        val.value = val.value.replace(/[^A-z0-9\@\_\.\!\~\*\-\']/g, '');
                        break;
                    case 'user_phone':
                        val.value = val.value.replace(/[^\d\)\(\-]/g, '');
                        break;
                    case 'user_message':
                        val.value = val.value.replace(/[^А-я \-\.\,\?\!]/g, '');
                        break;
                }
            }
        };
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                fixInputValue(input);
            });
            input.addEventListener('blur', () => {
                fixInputValue(input);
                if (
                    (input.getAttribute('type') === 'text' || input.getAttribute('name') === 'user_message') &&
                    input.value
                ) {
                    input.value = input.value
                        .split(' ')
                        .map(item => {
                            return (item = item[0].toUpperCase() + item.substring(1).toLowerCase());
                        })
                        .join(' ');
                }
                input.value = input.value.replace(/\-+/g, '-').replace(/\s+/g, ' ').trim();
            });
        });
    };

    const correctCalc = inputs => {
        inputs.forEach((item, i) => {
            if (i !== 0)
                item.addEventListener('input', () => {
                    item.value = item.value.replace(/\D/, '');
                });
        });
    };
    correctForm(form1);
    correctForm(form2);
    correctForm(form3);

    correctCalc(calcForm);
};

export default formValidation;
