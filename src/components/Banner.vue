<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">Онлайн-сервис <br />доставки еды на дом</h2>
        <p class="banner-item--subtitle">Блюда из любимого ресторана привезёт курьер в перчатках, маске и с антисептиком</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  margin-bottom: 56px;
}

.banner-item {
  background: #fff1b8;
  background-image: url('../assets/images/banners/bg-banner1_cr.png');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 68px;
  border-radius: 10px;
}

.banner-item--title {
  max-width: 50%;
  color: #302c34;
  font-size: 39px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 15px;
}

.banner-item--subtitle {
  max-width: 50%;
  color: #302c34;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
}
</style>
