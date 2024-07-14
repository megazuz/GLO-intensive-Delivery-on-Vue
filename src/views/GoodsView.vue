<template>
  <section class="cards">
    <div class="container">
      <div class="cards-header" id="goods-title">
        <div class="rest-name">{{ restInfo.name }}</div>
        <div class="rating-box" v-for="rating in restInfo.rating" :key="rating"><img src="../assets/icons/star.svg" alt="rating" />{{ rating }}</div>
        <div class="price-box" v-for="price in restInfo.price" :key="price">от {{ price }} ₽</div>
        <div class="group-box" v-for="tags in restInfo.tags" :key="tags">{{ tags }}</div>
      </div>
      <div class="cards-wrapper">
        <div class="card" v-for="goods in goodsArrayTemp" :key="goods.id">
          <img :src="getUrl(goods.image)" :alt="getAlt(goods.alt)" />
          <div class="card__description">
            <div class="product-name">Калифорния Лосось Стандарт</div>
            <div class="product-composition">Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.</div>
            <div class="card__controls">
              <span class="product-price">395 ₽</span>
              <button class="btn btn-primary">В корзину<img src="../assets/icons/shopping-cart_white.svg" alt="shopping cart" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { restsArray } from '../constants/rests-array';
import { goodsArray } from '../constants/goods-array';
let goodsArrayTemp = undefined;
const getUrl = (text) => new URL(`../assets/images/goods/${text}`, import.meta.url);
const getAlt = (text) => `${text}`;

let restInfo = '';

const restId = new URL(document.location).searchParams.get('id');
if (restId) {
  restInfo = {
    name: restsArray[restId].name,
    rating: [restsArray[restId].rating],
    price: [restsArray[restId].price],
    tags: restsArray[restId].tags,
  };
  goodsArrayTemp = goodsArray;
} else {
  restInfo = {
    name: 'Ресторан не выбран!',
    tags: ['Вернитесь на главную страницу и кликните на нужном ресторане'],
  };
}
</script>
