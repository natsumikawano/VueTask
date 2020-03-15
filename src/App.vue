
<template>
  <div id="app">
    <div class="page">
      <transition name="router">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: "App"
  };
</script>

<style>
  html,
body {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
}
</style>