<template>
  <div
    class="item"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragleave.prevent
    @dragenter.prevent
  >
    <div class="item__title">
      <div class="left">
        <div></div>
      </div>
      <div class="right">
        <div class="text"></div>
      </div>
    </div>
    <div class="item__body">
      <div class="up"></div>
      <div class="down"></div>
    </div>

    <div class="item__footer"></div>
  </div>
</template>
<script>
export default {
  props: { name: { type: String }, drop: { type: Function } },
  methods: {
    onDrop(event) {
      const itemId = parseInt(event.dataTransfer.getData("itemId"));
      const nameStart = event.dataTransfer.getData("nameStart");
      const nameEnd = this.name;
      this.drop({ itemId, nameStart, nameEnd });
    },
  },
};
</script>
<style scoped>
@import "../../assets/scss/canban/components/CanbanCardFree.css";
</style>
