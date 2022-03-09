const calculator = price => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    let id;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (+calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        if (totalValue !== 0) {
            renderTotal(totalValue);
        } else {
            total.textContent = 0;
        }
    };

    const renderTotal = totalValue => {
        let numToTotal = parseInt(totalValue * ((totalValue.toString.length + 4) / 10));
        let stepNum = totalValue.toString().length > 3 ? 10 ** (totalValue.toString().length - 3) : 1;

        clearInterval(id);

        id = setInterval(() => {
            numToTotal += stepNum;
            total.textContent = numToTotal;
            if (numToTotal >= totalValue) {
                clearInterval(id);
                total.textContent = totalValue;
            }
        }, 1);
    };

    calcBlock.addEventListener('input', e => {
        if (e.target == calcType || e.target == calcSquare || e.target == calcCount || e.target == calcDay) {
            countCalc();
        }
    });
};
export default calculator;
