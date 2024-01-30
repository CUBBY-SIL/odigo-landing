let bodyElement = document.body;
let preloader = document.querySelector('.preloader');

import './index.html';
import './index.scss';
import './modules/dropDownMenu';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

window.addEventListener("load", () => {
    bodyElement.classList.remove('active-loader');
    preloader.classList.add('_hidden');
    
    AOS.init({
        duration: 700,
        offset: 100,
        once: true,
    });
});
