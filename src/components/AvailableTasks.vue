<template>
  <table id="availableTasks">
    <tr id="headers">
      <th>Palet number</th>
      <th>Plant</th>
      <th>Activity</th>
      <th>Due</th>
      <th>Priority</th>
      <th>Take task</th>
    </tr>
    <tr v-for="task in availableTasks" :key="task.dateOfPlanting">
      <td>{{ task.paletNumber }}</td>
      <td>{{ task.paletPlantsTypeName || "not specified" }}</td>
      <td>{{ task.typeOfCareName }}</td>
      <td>
        {{ new Date(task.timeOfCare).toLocaleDateString("en-US", dateFormat) }}
      </td>
      <td>{{ task.priorityNumber }}</td>
      <td>
        <input type="checkbox" name="takeTask" @click="takeTask(task)" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "available",
  props: {
    tasks: Array,
    userId: String,
    dateFormat: Object,
  },
  computed: {
    availableTasks: function () {
      return (this.tasks || [])
        .filter((result) => result.userId == null)
        .sort((a, b) => {
          if (a.priorityNumber > b.priorityNumber) return -1;
          if (a.priorityNumber < b.priorityNumber) return 1;
          return 0;
        });
    },
  },
  methods: {
    takeTask(task) {
      this.tasks[this.tasks.indexOf(task)].userId = -this.userId;
      //TODO: CALL API AND UPDATE DB
    },
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
  background: #43a047;
  color: #ffffff;
}

table {
  width: 70%;
  margin: 0 auto;
  text-align: left;
  box-shadow: 2px 2px 4px rgb(60 60 59 / 15%);
  border-collapse: collapse;
  background: #ffffff;
}

tr:hover {
  background: rgb(240, 240, 240);
}

th {
  padding: 10px 0px 10px 15px;
  margin: 0;
  color: white;
  border: 0;
}

td {
  padding: 5px 0px 5px 15px;
}

#headers {
  background: #76b852;
}

input[type="checkbox"]:before {
  position: relative;
  display: block;
  width: 12px;
  height: 12px;
  content: "";
}

input[type="checkbox"]:not(:disabled):hover:before {
  /* background-color: #ECEFF1; */
  cursor: pointer;
  border-radius: 1px;
}
</style>