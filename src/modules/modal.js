const modal = () => {
    const modal = document.querySelector('.popup');
    const modalWindow = modal.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    const btnClose = modal.querySelector('.popup-close');
    let width = document.documentElement.clientWidth;
    let id;

    const changeDisplay = () => {
        if (!modal.style.display) {
            modal.style.display = 'block';
        } else {
            modal.style.display = '';
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
