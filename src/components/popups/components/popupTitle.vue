<template>
  <div class="title">
    <div class="title__text">{{ shortTaskTitle() }}</div>
    <div class="exit" @click.prevent="closePopup">x</div>
  </div>
</template>
<script>
export default {
  props: ["Task", "closePopup"],
  methods: {
    shortTaskTitle() {
      const { Task } = this;
      return Task ? Task.substr(0, 20) : "";
    },
  },
};
</script>
<style scoped>
@import "./style.scss";
</style>
