'use strict';

import { restsArray } from '/src/modules/rests-array';

export const goodsTitleFunc = () => {
  const restId = new URL(document.location).searchParams.get('id');
  const goodsTitle = document.querySelector('#goods-title');
  const rest = restsArray[restId];

  document.title += ': ' + rest.name;

  const tagsHTML = (arrayOfText) => {
    let output = '';
    arrayOfText.forEach((text) => {
      output += '<div class="group-box">' + text + '</div>';
    });
    return output;
  };

  goodsTitle.innerHTML = `
<div class="rest-name">${rest.name}</div>
<div class="rating-box"><img src="./public/icons/star.svg" alt="rating">${rest.rating}</div>
<div class="price-box">От ${rest.price} ₽</div>
${tagsHTML(rest.tags)}`;
};
