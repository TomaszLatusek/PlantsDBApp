<template>
  <div>
    <SidebarMenu />
    <ul>
      <li v-for="item in results" :key="item.userId">
       <p><span>Name: </span>{{ item.name }}</p>
       <p><span>Last name: </span>{{ item.lastName }}</p>
       <p><span>Email address: </span>{{ item.mail }}</p>
       <p><span>Phone number: </span>{{ item.phone }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import SidebarMenu from "../components/SidebarMenu.vue";

const API = "https://localhost:5001/api";
axios.defaults.headers.common["accept"] = "text/json";

export default {
  name: "account",
  components: {
    SidebarMenu,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    getAccountDetails() {
      axios.get(`${API}/Users`).then((response) => {
        this.results = response.data;
        console.log(response.data);
      });
    },
  },
  beforeMount() {
    this.getAccountDetails();
  },
};
</script>

<style scoped>
span {
    font-weight: bold;
}
</style>