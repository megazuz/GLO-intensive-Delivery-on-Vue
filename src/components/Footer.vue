<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link to="/" class="footer-logo logo">
          <img src="../assets/logo.svg" alt="logo" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <router-link to="/goods/">
              <li>Ресторанам</li>
            </router-link>
            <router-link to="/goods/">
              <li>Курьерам</li>
            </router-link>
            <router-link to="/goods/">
              <li>Пресс-центр</li>
            </router-link>
            <router-link to="/goods/">
              <li>Контакты</li>
            </router-link>
          </ul>
        </div>
        <div class="footer-social">
          <img src="../assets/social/insta.svg" alt="Instagram" />
          <img src="../assets/social/fb.svg" alt="Facebook" />
          <img src="../assets/social/vk.svg" alt="VK" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  min-height: 156px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 60px 0;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.footer-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  flex-wrap: wrap;
}

.footer-nav {
  flex-grow: 1;
}

.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
  flex-wrap: wrap;
}

.footer-nav ul li {
  font-weight: 400;
  font-size: 18px;
}

.footer-social {
  scale: 0.75;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  gap: 20px;
}
</style>
