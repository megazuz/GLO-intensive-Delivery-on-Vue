'use strict';
import '@/assets/css/fonts.css'; // подключаемые шрифты
import '@/assets/css/main.css'; // основной css
import '@/assets/css/boxes.css'; // ходовые универсальные форматирования дивов
import '@/assets/css/buttons.css'; // форматирование кнопок
// import '@/assets/css/header.css'; // стили чердака
// import '@/assets/css/banner.css'; // стили баннеров
import '@/assets/css/cards.css'; // раздел с карточками
// import '@/assets/css/footer.css'; // стили подвала
import '@/assets/css/media.css'; // @media стили
// import '@/assets/css/cart-modal.css'; // стили модального окна корзины

// import { modalFunc } from '@/modules/modal';
// modalFunc();
// import { restsFunc } from '@/modules/rests';
// restsFunc();
// import { goodsTitleFunc } from '@/modules/goods-title';
// goodsTitleFunc();
// import { goodsFunc } from '@/modules/goods';
// goodsFunc();

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
