const getUserTime = () => {
    const pg = document.querySelector('#time');
    const weekDays = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];

    const getTime = () => {
        const date = new Date();
        const weekIndex = [6, 0, 1, 2, 3, 4, 5][date.getDay()];

        const changeWelcome = () => {
            const h = date.getHours();
            switch (true) {
                case h >= 18:
                    return 'Добрый вечер';
                case h >= 12:
                    return 'Добрый день';
                case h >= 6:
                    return 'Доброе утро';
                default:
                    return 'Доброй ночи';
            }
        };

        const getDaysToNewYear = () => {
            const dateNY = new Date(date.getFullYear() + 1, 0, 1);
            const timeRemaining = (dateNY.getTime() - date.getTime()) / 1000;
            const daysRemaining = Math.floor(timeRemaining / 60 / 60 / 24);
            return daysRemaining;
        };
        const welcome = changeWelcome();
        const daysToNewYear = getDaysToNewYear();

        return { date, weekIndex, welcome, daysToNewYear };
    };

    const setTimeToPage = () => {
        const time = getTime();

        pg.innerHTML = `
            <p>${time.welcome}</p>
            <p>Сегодня: ${weekDays[time.weekIndex]}</p>
            <p>Текущее время: ${time.date.toLocaleTimeString('en')}</p>
            <p>До нового года осталось ${time.daysToNewYear} дней</p>
        `;
        setTimeout(setTimeToPage, 1000);
    };
    setTimeToPage();
};
getUserTime();
