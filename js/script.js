import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMobileMenu from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFecthBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMobileMenu();
initFuncionamento();
initFetchAnimais();
initFecthBitcoin();
initAnimacaoScroll();

