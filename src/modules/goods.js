'use strict';

import { goodsArray } from '@/modules/goods-array';

export const goodsFunc = () => {
  const container = document.querySelector('#goods-container');

  const loading = () => {
    container.innerHTML = '<div style="width: 100%; text-align: center">Загрузка</div>';
  };

  const containerFill = (array) => {
    container.innerHTML = '';
    array.forEach((card) => {
      container.insertAdjacentHTML(
        'beforeend',
        `
<div class="card">
  <img src="./public/goods/${card.image}" alt="${card.alt}">
  <div class="card__description">
      <div class="product-name">${card.name}</div>
      <div class="product-composition">${card.composition}</div>
      <div class="card__controls">
        <span class="product-price">${card.price} ₽</span>
        <button class="btn btn-primary">В корзину<img src="./public/icons/shopping-cart_white.svg" alt="shopping cart"></button>
      </div>
  </div>
</div>`
      );
    });
  };
  if (container) {
    loading();
    setTimeout(() => {
      containerFill(goodsArray);
    }, 1000);
  }
};
