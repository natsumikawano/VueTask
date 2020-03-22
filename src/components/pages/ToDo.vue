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

      <!-- <input v-model="taskText">
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
            <b-checkbox v-model="task.done">
              <span v-bind:class="{'done': task.done}">
                {{ task.message }}
              </span>
            </b-checkbox>
          </div>
        </section> -->
  
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
    // watch: {
    //   name(newName) {
    //     localStorage.name = newName;
    //   }
    // }
//   methods: {
//     addTask() {
//       var addData = { message : this.taskText, done: false }
//       this.tasks.push(addData)
//       this.taskText = ''
//       localStorage.setItem('task', JSON.stringify(this.tasks))
//     }
//   },
//     mounted() {
//     this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
//   },
//    watch: {
//     tasks: {
//       handler: function(){
//         this.storeTasks()
//       },
//       deep: true,
//     }
//   },
};
</script>
