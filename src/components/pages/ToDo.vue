<template>
<div class="todo">
  <h2>Cats</h2>
  <div v-for="(task, n) in tasks" :key="task.task">
    <p>
    <span class="cat">{{ task }}</span>
    <button @click="removeTask(n)">Remove</button>
    </p>
  </div>
  <p>
    <input v-model="newTask">
    <button @click="addTask">Add Task</button>
  </p>  
  <router-link to="/" exact>Home</router-link>
</div>  
</template>
<script>
export default {  
  name: "ToDo",
  data() {
      return {
        tasks: [],
        newTask: null
      }
    },
    mounted() {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      } catch(e) {
        localStorage.removeItem('tasks');
      }
    }
  },
  methods: {
    addTask() {
      // 実際に何かしたことを入力する
      if (!this.newTask) {
        return;
      }
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.saveTasks();
    },
    removeTask(x) {
      this.tasks.splice(x, 1);
      this.saveTasks();
    },
    saveTasks() {
      const parsed = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', parsed);
    }
  }
};
</script>
