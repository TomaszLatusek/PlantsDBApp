<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Login</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.app {
  margin: 0;
  padding: 0;
  background: #76b852;
}
</style>
