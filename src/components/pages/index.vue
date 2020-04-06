<template>
  <div>
    <div id="RootContent">
      <div id="title">
        <p>{{message}}</p>
      </div>
      <div v-for="(task, n) in tasks" :key="task.task">
        <p>
          <span class="task">{{ task }}
      
          </span>
        </p>
        <button type="button" class="btn btn-primary"  @click="removeTask(n)">削除</button>
      </div>
      <div>
        <div class="section">{{section1}}</div>
        <draggable v-model="itemsA" group="myGroup" @start="drag=true" @end="drag=false" :options="options">
          <div class="item detail" v-for="item in itemsA" :key="item.id">
            <span>{{item.name}}</span>
            <span class="day">{{item.day}}</span>
        </div>
        </draggable>
        <div class="section">{{section2}}</div>
        <draggable v-model="itemsB" group="myGroup" @start="drag=true" @end="drag=false" :options="options">
          <div class="item detail" v-for="item in itemsB" :key="item.id">
            <span>{{item.name}}</span>
            <span class="day">{{item.day}}</span>
          </div>
        </draggable>
        <!-- <router-link to="/todo">ToDoVue</router-link> -->
      </div>
    </div>
    <div class="modal-sample">
      <a href="#" class="btn-circle-3d" @click="toggle">+</a>
      <div id="overlay" v-if="visible">
        <div id="content">
          <h2>タスク1</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">期限</label>
            <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

            <label for="exampleFormControlTextarea1">メモ</label>
            <textarea v-model="newTask" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-primary" @click="toggle">キャンセル</button>
          <button type="button" class="btn btn-primary" @click="addTask">追加</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name:'modal-sample',
  components: { draggable },
  data(){
    return{
      visible: false,
      message:'Tasks',
      section1:'基本スケジュール',
      section2:'スポーツ',
      options: {
        group: "myGroup",
        animation: 200
      },
      itemsA: [
          { id: 1, 
            name: '早起き',
            day: '12月13日' },
      ],
      itemsB: [
        { id: 6, 
          name: 'テニス',
          day: '12月13日' }
      ],
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
    toggle() {
      this.visible = !this.visible;
    },
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
<style>
 @media (max-width:768px){

    #RootContent {
      height: 100%;
      overflow: scroll;
    }

    #title {
      width:100%;
      height:40px;
      padding:8px;
      font-size: 25px;
    }

    .section {
      width:100%;
      height:40px;
      color: white;
      padding: 8px;
      background:linear-gradient(135deg, #7568f0 0%,#ad8bf7 100%);
    }

    .day {
      float: right;
    }

    .item {
      display: inline-block;
      width: 100%;
      height: 60px;
      padding: 15px;
      background:snow;
      border: 1px solid #dcdcdc;
      border-radius: 3px;
    }

    .btn-circle-3d {
      font-size: 10vw;
      display: inline-block;
      text-decoration: none;
      background: #ff8181;
      color: #FFF;
      width: 70px;
      height: 70px;
      line-height: 60px;
      border-radius: 50%;
      text-align: center;
      font-weight: bold;
      overflow: hidden;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
      border-bottom: solid 3px #bd6565;
      transition: .4s;
      bottom: 50px;
    }

    .btn-circle-3d:active {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
      border-bottom: none;
    }

    #overlay{
      z-index:1;
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-color:rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #content{
      z-index:2;
      width:90%;
      height: 70%;
      padding: 1em;
      background:#fff;
    }

    a {
      float: right;
    }

    label {
      margin-top: 20px;
      margin-bottom: 0px;
    }

  }
</style>
