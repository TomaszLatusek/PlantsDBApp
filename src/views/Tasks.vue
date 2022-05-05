<template>
  <div class="tasksWrapper">
    <SidebarMenu />
    {{ userId }}
    <table id="availableTasks">
      <tr class="titleRow">
        <td colspan="5">Available tasks</td>
      </tr>
      <tr id="headers">
        <th>Palet number</th>
        <th>Plant</th>
        <th>Activity</th>
        <th>Due</th>
        <th>Priority</th>
      </tr>
      <tr v-for="task in todo" :key="task.dateOfPlanting">
        <td>{{ task.paletNumber }}</td>
        <td>{{ task.paletPlantsTypeName || "not specified" }}</td>
        <td>{{ task.typeOfCareName }}</td>
        <td>{{ task.timeOfCare }}</td>
        <td>{{ task.priorityNumber }}</td>
      </tr>
    </table>
    <table id="takenTasks">
      <tr class="titleRow">
        <td colspan="5">Taken tasks</td>
      </tr>
      <tr id="headers">
        <th>Palet number</th>
        <th>Plant</th>
        <th>Activity</th>
        <th>Due</th>
        <th>Priority</th>
      </tr>
      <tr v-for="task in results" :key="task.dateOfPlanting">
        <td>{{ task.paletNumber }}</td>
        <td>{{ task.paletPlantsTypeName || "not specified" }}</td>
        <td>{{ task.typeOfCareName }}</td>
        <td>{{ task.timeOfCare }}</td>
        <td>{{ task.priorityNumber }}</td>
      </tr>
    </table>
    <table id="finishedTasks">
      <tr class="titleRow">
        <td colspan="5">Finished tasks</td>
      </tr>
      <tr id="headers">
        <th>Palet number</th>
        <th>Plant</th>
        <th>Activity</th>
        <th>Due</th>
        <th>Priority</th>
      </tr>
      <tr v-for="task in results" :key="task.dateOfPlanting">
        <td>{{ task.paletNumber }}</td>
        <td>{{ task.paletPlantsTypeName || "not specified" }}</td>
        <td>{{ task.typeOfCareName }}</td>
        <td>{{ task.timeOfCare }}</td>
        <td>{{ task.priorityNumber }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import SidebarMenu from "../components/SidebarMenu.vue";

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
  computed: {
    availableTasks: function () {
      return (this.results || [])
        .filter((result) => result.userId == null)
        .sort((a, b) => {
          if (a.priorityNumber > b.priorityNumber) return -1;
          if (a.priorityNumber < b.priorityNumber) return 1;
          return 0;
        });
    },
    takenTasks: function () {
      return (this.results || [])
        .filter((result) => result.userId == null)
        .sort((a, b) => {
          if (a.priorityNumber > b.priorityNumber) return -1;
          if (a.priorityNumber < b.priorityNumber) return 1;
          return 0;
        });
    },
    availableTasks: function () {
      return (this.results || [])
        .filter((result) => result.userId == null)
        .sort((a, b) => {
          if (a.priorityNumber > b.priorityNumber) return -1;
          if (a.priorityNumber < b.priorityNumber) return 1;
          return 0;
        });
    },
  },
  methods: {
    getTasks() {
      axios.get(`${API}/ActualTaskDedic`).then((response) => {
        this.results = response.data;
      });
    },
  },
  beforeMount() {
    this.getTasks();
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

* {
  font-family: "Roboto", sans-serif;
}

.tasksWrapper {
  margin-left: 250px;
}

.titleRow td {
  background: #76b852;
}

table {
  width: 70%;
  margin: 0 auto;
  text-align: left;
  margin-top: 40px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-collapse: collapse;
}

tr:hover {
  background: rgb(240, 240, 240);
}

th {
  padding: 10px 0px 10px 5px;
  margin: 0;
  color: white;
  border: 0;
}

td {
  padding: 5px 0px 5px 5px;
}

#headers {
  background: #76b852;
}
</style>
