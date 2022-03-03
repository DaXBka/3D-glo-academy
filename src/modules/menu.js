const menu = function () {
    const menu = document.querySelector('menu');
    const main = document.querySelector('main');
    console.log(main);

    document.addEventListener('click', e => {
        if (e.target.closest('.menu') || e.target.matches('menu, menu>li')) {
            menu.classList.add('active-menu');
        } else {
            menu.classList.remove('active-menu');
        }
    });
};
export default menu;
