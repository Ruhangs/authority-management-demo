<template>
  <div class="login-page-index" style="--show: block">
    <Login></Login>
  </div>
</template>

<script setup>
import Login from '../components/Login.vue';
</script>

<style lang="less" scoped>
.login-page-index {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #222;
  font-size: 14px;
  background-image: url(../../public/img/img-bg-login1920.png);
  background-size: cover;
  background-repeat: no-repeat;
  // background-position: 0 58px;
}
</style>