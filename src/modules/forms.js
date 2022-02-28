const formValidation = () => {
    (function () {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0\-]+|[\s\uFEFF\xA0\-]+$/g, '');
        };
    })();

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    const correctForm = form => {
        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                switch (input.getAttribute('name')) {
                    case 'user_name':
                        input.value = input.value.replace(/\d/, '');
                        break;
                    case 'user_email':
                        input.value = input.value.replace(
                            /[^A-z0-9\@\_\.\!\~\*\-\']/,
                            ''
                        );
                        break;
                    case 'user_phone':
                        input.value = input.value.replace(/[^\d\)\()-]/, '');
                        break;
                    case 'user_message':
                        input.value = input.value.replace(/[^А-я -]/, '');
                        break;
                }
            });
            input.addEventListener('blur', () => {
                if (
                    input.getAttribute('type') === 'text' ||
                    input.getAttribute('name') === 'user_message'
                ) {
                    input.value =
                        input.value[0].toUpperCase() +
                        input.value.substring(1).toLowerCase();
                }
                input.value = input.value
                    .replace(/\-+/g, '-')
                    .replace(/\s+/g, ' ')
                    .trim();
            });
        });
    };

    correctForm(form1);
    correctForm(form2);
    correctForm(form3);
};

export default formValidation;
