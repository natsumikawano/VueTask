<template>
  <div>
    <div id="RootContent">
      <div id="title">
        <p>{{message}}</p>
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
        <router-link to="/about"><a href="#" class="btn-circle-3d">+</a></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name:'App',
  components: { draggable },
  data(){
    return{
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
          { id: 2, 
            name: '早寝',
            day: '1月5日'
           }
      ],
      itemsB: [
        { id: 6, 
          name: 'テニス',
          day: '12月13日' },
        { id: 7, 
          name: 'バスケ',
          day: '1月5日'
          },
        { id: 8,
          name: '野球',
          day: '1月1日' }
      ]
    }
  }
}
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
      font-size: 40px;
      overflow: auto;
      border-bottom: solid 3px #bd6565;
      transition: 0.4s;
    }

    .btn-circle-3d:active {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
      border-bottom: none;
    }

    a {
      float: right;
    }

  }
</style>
