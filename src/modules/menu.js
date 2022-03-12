const menu = function () {
    const menu = document.querySelector('menu');

    document.addEventListener('click', e => {
        const width = document.documentElement.clientWidth;

        if (e.target.closest('.menu') || e.target.matches('menu, menu li')) {
            if (width <= 768) {
                menu.classList.remove('active-menu');
                menu.style.transform = 'translateX(100%)';
            }
            else {
                menu.classList.add('active-menu');
                menu.style.transform = '';
            }
        } else {
            if (e.target.matches('.close-btn')) e.preventDefault();

            if (width <= 768) {
                menu.classList.remove('active-menu');
                menu.style.transform = 'translateX(-100%)';
            }
            else {
                menu.classList.remove('active-menu');
                menu.style.transform = '';
            }
        }
    });
};
export default menu;
