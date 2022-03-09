import Swiper, { Autoplay, Pagination } from 'swiper';

export const swiperFunc = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
};
