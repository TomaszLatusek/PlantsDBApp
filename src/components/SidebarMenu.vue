<template>
  <div>
    <div id="mySidenav" class="sidenav">
      <!-- <a href="javascript:void(0)" class="closebtn" @click="closeNav"
        >&times;</a
      > -->
      <!-- <img src="../../public/icons8-leaf-64.png" alt="logo" id="logo"/> -->
      <router-link to="/tasks">Tasks</router-link>
      <router-link to="/account">My Account</router-link>
      <router-link to="/plants">Plants</router-link>
    </div>
    <!-- <span style="font-size: 30px; cursor: pointer" @click="openNav"
      >&#9776; open</span
    > -->
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  methods: {
    // openNav() {
    //   document.getElementById("mySidenav").style.width = "250px";
    // },
    // closeNav() {
    //   document.getElementById("mySidenav").style.width = "0";
    // },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

#mySidenav {
  width: 250px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #76b852;
  padding-top: 40px;
  /* overflow-x: hidden; */
  /* transition: 0.5s; */
}

/* #logo {
  margin: 0;
  align-self: center;
  background: #639c44;
  justify-self: center;
} */

.sidenav a {
  font-family: "Roboto", sans-serif;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #cbddc2;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #ffffff;
  background: #43a047;
  /* font-size: 28px;
  padding-bottom: 4px; */
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
