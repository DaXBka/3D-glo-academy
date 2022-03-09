import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import calculator from './modules/calculator';
import formValidation from './modules/forms';
import tabs from './modules/tabs';
import slider from './modules/slider';
import { swiperFunc } from './modules/swiperSlider';
import { sendForm } from './modules/sendForm';

timer('10 march 2022');
menu();
modal();
scroll();
calculator(100);
formValidation();
tabs();
slider({
    sliderClass: '.portfolio-content',
    sliderItemClass: '.portfolio-item',
    dotsClassBlock: '.portfolio-dots',
    dotsClass: '.dot',
    arrowLeft: '#arrow-left',
    arrowRight: '#arrow-right',
    arrowsClass: '.portfolio-btn',
    sliderItemActive: '.portfolio-item-active',
    dotActive: '.dot-active',
});
swiperFunc();
sendForm({
    formId: 'form1',
    url: 'https://jsonplaceholder.typicode.com/posts',
    someElem: [
        {
            type: 'block',
            id: 'total',
        },
    ],
});
sendForm({
    formId: 'form2',
    url: 'https://jsonplaceholder.typicode.com/posts',
});
sendForm({
    formId: 'form3',
    url: 'https://jsonplaceholder.typicode.com/posts',
});
