'use strict';
import '@/assets/css/fonts.css'; // подключаемые шрифты
import '@/assets/css/main.css'; // основной css
import '@/assets/css/boxes.css'; // ходовые универсальные форматирования дивов
import '@/assets/css/buttons.css'; // форматирование кнопок
import '@/assets/css/cards.css'; // раздел с карточками
import '@/assets/css/media.css'; // @media стили

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
