const menu = function () {
    const menu = document.querySelector('menu');

    document.addEventListener('click', e => {
        if (e.target.closest('.menu') || e.target.matches('menu, menu li')) {
            menu.classList.add('active-menu');
        } else {
            if (e.target.matches('.close-btn')) e.preventDefault();
            menu.classList.remove('active-menu');
        }
    });
};
export default menu;
