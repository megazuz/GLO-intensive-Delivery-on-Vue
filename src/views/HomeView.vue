<template>
  <Banner />

  <section class="cards">
    <div class="container">
      <div class="cards-header">
        <h3 class="cards-header--title">Рестораны</h3>
      </div>
      <div class="cards-wrapper" id="rests-container">

        <router-link class="card" v-for="rest in restsArray" :key="rest.id" :to="`/goods?id=${rest.id}`">
          <div class=" card__image"><img :src="getUrl(rest.image)" :alt="getAlt(rest.alt)">
          </div>
          <div class="card__description">
            <div class="card__description--title">
              <div class="rest-name">{{ rest.name }}</div>
              <div class="black-box">{{ rest.time }} мин</div>
            </div>
            <div class="card__description--badge">
              <div class="rating-box"><img src="../assets/icons/star.svg" alt="rating">{{ rest.rating }}</div>
              <div class="price-box">от {{ rest.price }} ₽</div>
            </div>
            <div class="card__description--tags">
              <div class="group-box" v-for="tags in restsArray[rest.id].tags" :key="tags">{{ tags }}</div>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </section>
</template>


<script setup>
import Banner from '../components/Banner.vue';
import { restsArray } from '../constants/rests-array';
const getUrl = (text) => { return new URL(`../assets/images/rests/${text}`, import.meta.url) };
const getAlt = (text) => { return `${text}` };

</script>
