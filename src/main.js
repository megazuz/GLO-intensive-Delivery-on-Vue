'use strict';
import './css/fonts.css'; // подключаемые шрифты
import './css/main.css'; // основной css
import './css/boxes.css'; // ходовые универсальные форматирования дивов
import './css/buttons.css'; // форматирование кнопок
import './css/header.css'; // стили чердака
import './css/banner.css'; // стили баннеров
import './css/cards.css'; // раздел с карточками
import './css/footer.css'; // стили подвала
import './css/media.css'; // @media стили
import './css/cart-modal.css'; // стили модального окна корзины

import { modalFunc } from '/src/modules/modal';
modalFunc();
import { restsFunc } from '/src/modules/rests';
restsFunc();
import { goodsTitleFunc } from '/src/modules/goods-title';
goodsTitleFunc();
import { goodsFunc } from '/src/modules/goods';
goodsFunc();

// import { createApp } from 'vue'
// import App from './App.vue'
// createApp(App).mount('#app')
