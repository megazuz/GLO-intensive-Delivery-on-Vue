<template>
  <div class="cart-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
    <div class="cart-modal">
      <div class="cart-modal__header">
        <div class="cart-modal__header-row">
          <div class="cart-modal__header--title">Корзина</div>
          <span class="close" @click="closeModal()"><img src="../assets/icons/close_black.svg" alt="close" /></span>
        </div>
      </div>

      <div class="cart-modal__body">
        <div class="cart-modal__item">
          <div class="cart-modal__item-row">
            <div class="product-name">Ролл Угорь Стандарт</div>
            <div class="cart-modal__item-controls">
              <span class="product-price">250 ₽</span>
              <button class="cart-btn" alt="−">−</button>
              <div class="product-count">1</div>
              <button class="cart-btn" alt="+">+</button>
            </div>
          </div>
        </div>

        <div class="cart-modal__item">
          <div class="cart-modal__item-row">
            <div class="product-name">Калифорния Лосось Стандарт</div>
            <div class="cart-modal__item-controls">
              <span class="product-price">395 ₽</span>
              <button class="cart-btn" alt="−">−</button>
              <div class="product-count">1</div>
              <button class="cart-btn" alt="+">+</button>
            </div>
          </div>
        </div>

        <div class="cart-modal__item">
          <div class="cart-modal__item-row">
            <div class="product-name">Окинава Стандарт</div>
            <div class="cart-modal__item-controls">
              <span class="product-price">250 ₽</span>
              <button class="cart-btn" alt="−">−</button>
              <div class="product-count">1</div>
              <button class="cart-btn" alt="+">+</button>
            </div>
          </div>
        </div>

        <div class="cart-modal__item">
          <div class="cart-modal__item-row">
            <div class="product-name">Цезарь Маки X</div>
            <div class="cart-modal__item-controls">
              <span class="product-price">250 ₽</span>
              <button class="cart-btn" alt="−">−</button>
              <div class="product-count">1</div>
              <button class="cart-btn" alt="+">+</button>
            </div>
          </div>
        </div>

        <div class="cart-modal__item">
          <div class="cart-modal__item-row">
            <div class="product-name">Ясай Маки Стандарт 185 г</div>
            <div class="cart-modal__item-controls">
              <span class="product-price">250 ₽</span>
              <button class="cart-btn" alt="−">−</button>
              <div class="product-count">1</div>
              <button class="cart-btn" alt="+">+</button>
            </div>
          </div>
        </div>

        <div class="cart-modal__item">
          <div class="cart-modal__item-row">
            <div class="product-name">Ролл Креветки Стандарт</div>
            <div class="cart-modal__item-controls">
              <span class="product-price">250 ₽</span>
              <button class="cart-btn" alt="−">−</button>
              <div class="product-count">1</div>
              <button class="cart-btn" alt="+">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-modal__footer">
        <div class="cart-modal__item-controls">
          <span class="product-price">1645 ₽</span>
          <button class="btn btn-primary">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean });
const emit = defineEmits(['toggleModal']);
const closeModal = () => emit('toggleModal');
</script>

<style scoped>
.cart-modal__overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
}

.cart-modal__overlay.open {
  display: flex;
}

.cart-modal {
  width: 100%;
  max-width: 780px;
  padding: 40px 45px;
  border-radius: 5px;
  background-color: #fff;
}

.cart-modal__header {
  margin-bottom: 36px;
}

.cart-modal__header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-modal__header--title {
  color: #000;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
}

.cart-modal__item {
  padding: 12px 0px;
  border: 0px solid #8c8c8c;
  border-bottom-width: 1px;
}

.cart-modal__item:last-child {
  padding-bottom: 13px;
  border: none;
}

.cart-modal__footer {
  margin-top: 16px;
}

.cart-modal__item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-modal__item-controls {
  display: flex;
  align-items: center;
  row-gap: 10px;
  column-gap: 15px;
  flex-wrap: wrap;
  justify-content: flex-end;
  white-space: nowrap;
  flex-wrap: nowrap;
}
</style>
