<template>
  <div class="app">
    <!-- <div class="nav">
      <router-link to="/">Login</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <!-- <Login /> -->
    <router-view/>
  </div>
</template>

<script>
import Login from './views/Login.vue';
export default {
  name: 'App',
  components: {
    Login,
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}

.app {
  margin: 0;
  padding: 0;
  height: 100vh;
  /* background: #76b852; */
}
</style>
