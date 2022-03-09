const menu = function () {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const menuBtnClose = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul > li > a');
    const menuItemsForClose = [menuBtn, menuBtnClose, ...menuItems];

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuItemsForClose.forEach(item =>
        item.addEventListener('click', handleMenu)
    );
};
export default menu;
