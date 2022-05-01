<template>
  <div>
    <SidebarMenu />
    <table>
      <tr>
        <th>Palet number</th>
        <th>Plant</th>
        <th>Activity</th>
        <th>Due</th>
      </tr>
      <tr v-for="task in results" :key="task.dateOfPlanting">
        <td>{{ task.paletNumber }}</td>
        <td>{{ task.paletPlantsTypeName || "not specified" }}</td>
        <td>{{ task.typeOfCareName }}</td>
        <td>{{ task.timeOfCare }}</td>
      </tr>
    </table>
    <!-- <ul>
      <li v-for="task in results" :key="task.dateOfPlanting">
          <p>{{ task.paletPlantsTypeName }}</p>
      </li>
    </ul> -->
  </div>
</template>

<script>
import axios from "axios";
import SidebarMenu from '../components/SidebarMenu.vue';

const API = "https://localhost:5001/api";
axios.defaults.headers.common["accept"] = "text/json";

export default {
  name: "tasks",
  components: {
    SidebarMenu,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    getTasks() {
      axios.get(`${API}/ActualTaskDedic`).then((response) => {
        this.results = response.data;
        console.log(response.data);
      });
    },
  },
  beforeMount() {
    this.getTasks();
  },
};
</script>
