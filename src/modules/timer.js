const timer = function (deadline) {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    let idInterval;
    let isTimeToDeadline = true;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();

        let timeRemaining = (dateStop - dateNow) / 1000;
        if (timeRemaining < 0) isTimeToDeadline = false;

        let hours = Math.floor(timeRemaining / 3600);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { hours, minutes, seconds };
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();

        const addZero = num => (num.toString().length == 1 ? '0' + num : num);

        if (!isTimeToDeadline) {
            clearInterval(idInterval);
            return;
        }
        timerHours.textContent = addZero(getTime.hours);
        timerMinutes.textContent = addZero(getTime.minutes);
        timerSeconds.textContent = addZero(getTime.seconds);
    };
    updateClock();

    idInterval = setInterval(updateClock, 1000);
};
export default timer;
