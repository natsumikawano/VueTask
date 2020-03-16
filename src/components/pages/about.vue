<template>
  <div>
    <h1>This is About Page!!</h1>
     <router-link to="/" exact>Home</router-link>
  </div>
</template>
<script>
export default {
  name: "vifdemo",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    }
  }
};
</script>

