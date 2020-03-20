<template>
<div class="todo">
      <input v-model="taskText">
      <p class="control">
        <button class="btn btn-primary" v-on:click="addTask()">
          +
        </button>
      </p>
      <section>
          <div
              class="field"
              v-for="task in tasks"
              v-bind:data="task"
              v-bind:key="task.text">
            <b-checkbox>
              {{ task.message }}
            </b-checkbox>
          </div>
        </section>
         <router-link to="/" exact>Home</router-link>
    </div>  
</template>
<script>
export default {
  name: "ToDo",
 data() {
    return {
      taskText: '',
      tasks: [
        { message: 'タスク１' },
        { message: 'タスク２' }
      ]
    }
  },
  methods: {
    addTask() {
      var addData = { message : this.taskText }
      this.tasks.push(addData)
      this.taskText = ''
    }
  }
};
</script>

