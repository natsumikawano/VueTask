<template lang="pug">
  .modaldemo
    .overlay
      .content
        header
          slot(name="header")
        main
          slot
        footer
          slot(name="footer")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "modal"
});
</script>

<style scoped>
.content {
  background-color: white;
  margin: 80px auto;
  width: 300px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000088;
}
</style>