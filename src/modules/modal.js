const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    const changeDisplay = () => {
        let width = document.documentElement.clientWidth;

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

    modal.addEventListener('click', e => {
        if (
            !e.target.closest('.popup-content') ||
            e.target.classList.contains('popup-close')
        ) {
            changeDisplay();
        }
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', changeDisplay);
    });

    modal.style.transition = 'opacity 0.3s ease';
    modal.style.opacity = 0;
};

export default modal;
