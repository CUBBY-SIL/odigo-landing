import './index.html';
import './index.scss';
import './modules/dropDownMenu';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

window.addEventListener("load", () => {
    AOS.init({
        duration: 700,
        offset: 100,
        once: true,
    });
});