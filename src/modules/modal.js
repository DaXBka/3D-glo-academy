const modal = () => {
    const modal = document.querySelector('.popup');
    const modalWindow = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const btnClose = modal.querySelector('.popup-close');
    let width = document.documentElement.clientWidth;
    let id;

    modal.style.transition = 'opacity 0.3s ease';
    modal.style.opacity = 0;

    const changeDisplay = () => {
        if (!modal.style.display) {
            modal.style.display = 'block';
            if (width > 768) setTimeout(() => (modal.style.opacity = 1), 100);
            else modal.style.opacity = 1;
        } else {
            modal.style.opacity = 0;
            if (width > 768) setTimeout(() => (modal.style.display = ''), 310);
            else modal.style.display = '';
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', changeDisplay);
    });

    btnClose.addEventListener('click', changeDisplay);

    window.addEventListener(
        'resize',
        () => (width = document.documentElement.clientWidth)
    );
};
export default modal;
