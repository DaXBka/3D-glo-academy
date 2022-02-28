const menu = function () {
    const menu = document.querySelector('menu');

    document.addEventListener('click', e => {
        if (e.target.closest('.menu') || e.target.matches('menu'))
            menu.classList.add('active-menu');
        else menu.classList.remove('active-menu');
    });
};
export default menu;
