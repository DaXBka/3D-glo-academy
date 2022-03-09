const scroll = () => {
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul > li > a');
    const scrollBtn = document.querySelector('main').querySelector('a');
    const scrollItems = [...menuItems, scrollBtn];

    scrollItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const id = item.getAttribute('href').substring(1);
            const block = document.getElementById(id);
            block.scrollIntoView({
                inline: 'nearest',
                behavior: 'smooth',
            });
        });
    });
};
export default scroll;
