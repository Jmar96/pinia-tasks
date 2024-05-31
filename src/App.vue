<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="Vue Logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favorite Tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks ({{ taskStore.totalCount }})</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    
    <div class="task-list" v-if="filter === 'favs'">
      <p>Fav Tasks ({{ taskStore.favCount }})</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script> 
import { useTaskStore } from "./store/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import {ref} from "vue";

export default {
  components: {TaskDetails, TaskForm},
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");

    return { taskStore, filter }
  }
}
</script>