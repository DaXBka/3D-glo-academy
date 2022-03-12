import { animate } from './helper';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    const changeDisplay = () => {
        let width = document.documentElement.clientWidth;

        if (!modal.style.display) {
            modal.style.display = 'block';
            if (width > 768) {
                modal.style.opacity = 0;

                animate({
                    duration: 125,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress;
                    },
                });
            } else {
                modal.style.opacity = 1;
            }
        } else {
            if (width > 768) {
                animate({
                    duration: 125,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = Math.abs(1 - progress);
                        if (progress == 1) modal.style.display = '';
                    },
                });
            } else {
                modal.style.display = '';
                modal.style.opacity = 0;
            }
        }
    };

    modal.addEventListener('click', e => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            changeDisplay();
        }
    });

    buttons.forEach(btn => {
        btn.addEventListener('click', changeDisplay);
    });
};

export default modal;
