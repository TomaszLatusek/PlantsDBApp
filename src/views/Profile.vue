<template>
  <div>
      <SidebarMenu />
      <router-view/>
  </div>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue';
export default {
  name: "profile",
  components: {
      SidebarMenu,
  },
};
</script>
