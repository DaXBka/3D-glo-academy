const sliderFunc = (
    sliderClass,
    sliderItemClass,
    dotsClass = '.dot',
    dotsClassBlock = '.portfolio-dots',
    arrowLeft = '#arrow-left',
    arrowRight = '#arrow-right',
    arrowsClass = '.portfolio-btn',
    sliderItemActive,
    dotActive
) => {
    const sliderBlock = document.querySelector(sliderClass);
    const slides = document.querySelectorAll(sliderItemClass);
    const dotsBlock = document.querySelector(dotsClassBlock);

    let dots;

    let currentSlide = 0;
    let intervalDuration = 4000;
    let idInterval;

    let isError = false;

    sliderItemActive = sliderItemActive || sliderItemClass.substring(1) + '-active';
    dotActive = dotActive || dotsClass.substring(1) + '-active';

    if (!sliderBlock || !slides) return;

    const prevSlide = (list, i, activeClass) => {
        list[i].classList.remove(activeClass);
    };

    const nextSlide = (list, i, activeClass) => {
        list[i].classList.add(activeClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, sliderItemActive);
        prevSlide(dots, currentSlide, dotActive);

        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;

        nextSlide(slides, currentSlide, sliderItemActive);
        nextSlide(dots, currentSlide, dotActive);
    };

    const startSlide = intervalDuration => {
        idInterval = setInterval(autoSlide, intervalDuration);
    };

    const stopSlide = () => {
        clearInterval(idInterval);
    };

    sliderBlock.addEventListener('click', e => {
        e.preventDefault();

        if (!e.target.matches(`${dotsClass}, ${arrowsClass}`)) return;

        prevSlide(slides, currentSlide, sliderItemActive);
        prevSlide(dots, currentSlide, dotActive);

        if (e.target.matches(arrowLeft)) {
            currentSlide--;
        } else if (e.target.matches(arrowRight)) {
            currentSlide++;
        } else if (e.target.classList.contains(dotsClass.substring(1))) {
            dots.forEach((dot, i) => {
                if (dot === e.target) {
                    currentSlide = i;
                }
            });
        }

        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        nextSlide(slides, currentSlide, sliderItemActive);
        nextSlide(dots, currentSlide, dotActive);
    });

    sliderBlock.addEventListener(
        'mouseenter',
        e => {
            if (e.target.matches(`${dotsClass}, ${arrowsClass}`)) {
                stopSlide();
            }
        },
        true
    );

    sliderBlock.addEventListener(
        'mouseleave',
        e => {
            if (e.target.matches(`${dotsClass}, ${arrowsClass}`)) {
                startSlide(intervalDuration);
            }
        },
        true
    );

    const repairDots = () => {
        dotsBlock.innerHTML = '';

        if (slides.length == 0) return (isError = true);

        slides.forEach(() => {
            const dot = document.createElement('li');
            dot.className = 'dot';
            dotsBlock.append(dot);
        });

        dots = document.querySelectorAll(dotsClass);
        dots[0].classList.add(dotActive);
    };

    repairDots();

    if (isError) return;

    startSlide(intervalDuration);
};
export default sliderFunc;
