const calculator = () => {
    const inputs = document.querySelectorAll('.calc-item');
    let isError = false;

    inputs.forEach((item, i) => {
        if (i !== 0)
            item.addEventListener('blur', () => {
                if (!isNaN(parseFloat(item.value)))
                    item.value = parseFloat(item.value);
                if (/\D/.test(item.value)) {
                    item.style.border = '1px solid #eb4545';
                    isError = true;
                } else item.style.border = '';
            });
    });
};
export default calculator;
