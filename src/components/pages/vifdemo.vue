<template lang="pug">
  .vifdemo
    button(type="button" class="btn btn-primary" @click="toggle") toggle
    ModalDemo(v-if="visible")
      template(#header)
        h1 hello
      template
        | こんにちは
      footer
        button(type="button" class="btn btn-primary" @click="close") close
</template>

<script>
import ModalDemo from "../ModalDemo.vue";

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
    },

    close() {
      this.visible = false;
    }
  },
  components: {
    ModalDemo
  }
};
</script>