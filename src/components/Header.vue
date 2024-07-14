<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/" class="header-logo logo">
          <img src="../assets/logo.svg" alt="logo" />
        </router-link>
        <div class="header-controls">
          <input type="text" class="header-controls--search" placeholder="Поиск блюд и ресторанов" />
          <div class="header-controls">
            <button class="btn btn-primary"><img src="../assets/icons/user_white.svg" alt="user" />Войти</button>
            <button class="btn btn-outline" @click="openModal()">
              <img src="../assets/icons/shopping-cart_gray.svg" alt="shopping cart" />Корзина
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['toggleModal']);
const openModal = () => emit('toggleModal');
</script>

<style scoped>
.header {
  min-height: 124px;
  display: flex;
  align-items: center;
}

.header-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-controls {
  width: fit-content;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}

.header-controls--search {
  min-width: 260px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  padding: 1px 12px;
  font-size: 16px;
  font-weight: 400;
}

.header-controls--search:focus {
  outline: none;
  border: 1px solid #d9d9d9;
}

.header-controls--search::placeholder {
  color: #bfbfbf;
  font-size: 16px;
  font-weight: 400;
}
</style>
