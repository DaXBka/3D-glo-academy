import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import calculator from './modules/calculator';
import formValidation from './modules/forms';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('5 march 2022');
menu();
modal();
scroll();
calculator();
formValidation();
tabs();
slider('.portfolio-content', '.portfolio-item');
