'use strict';

import { restsArray } from '/src/modules/rests-array';

export const restsFunc = () => {
  const container = document.querySelector('#rests-container');
  const loading = () => {
    container.innerHTML = '<div style="width: 100%; text-align: center">Загрузка</div>';
  };

  const tagsHTML = (arrayOfText) => {
    let output = '';
    arrayOfText.forEach((text) => {
      output += '<div class="group-box">' + text + '</div>';
    });
    return output;
  };

  const containerFill = (array) => {
    container.innerHTML = '';
    array.forEach((card) => {
      container.insertAdjacentHTML(
        'beforeend',
        `
<a href="./goods.html?id=${card.id}" class="card">
    <div class="card__image"><img src="./public/rests/${card.image}" alt="${card.alt}"></div>
    <div class="card__description">
    <div class="card__description--title">
        <div class="rest-name">${card.name}</div>
        <div class="black-box">${card.time} мин</div>
    </div>
    <div class="card__description--badge">
        <div class="rating-box"><img src="./public/icons/star.svg" alt="rating">${card.rating}</div>
        <div class="price-box">от ${card.price} ₽</div>
    </div>
    <div class="card__description--tags">
        ${tagsHTML(card.tags)}
    </div>
    </div>
</a>`
      );
    });
  };
  if (container) {
    loading();
    setTimeout(() => {
      containerFill(restsArray);
    }, 1000);
  }
};
