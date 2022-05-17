<template>
  <div class="card">
    <div class="card__title">
      <div class="text">
        <div class="text__up">{{ StageOfExecution }}</div>
      </div>
    </div>
    <div class="items__can" id="items__can">
      <CanbanCardFree
        :name="StageOfExecution"
        :drop="drop"
        v-if="!items.length"
      />
      <template v-else>
        <CanbanCardItem
          v-for="(item, idx) of items"
          :key="idx"
          :item="item"
          :drop="drop"
          :name="StageOfExecution"
          draggable="true"
        />
      </template>
    </div>
  </div>
</template>
<script>
import CanbanCardItem from "@/components/Canban/CanbanCardItem";
import CanbanCardFree from "@/components/Canban/CanbanCardFree";
export default {
  props: {
    items: { type: Object },
    changeCols: { type: Function },
    StageOfExecution: { type: String },
  },
  components: { CanbanCardItem, CanbanCardFree },
  methods: {
    drop({ itemId, nameStart, nameEnd }) {
      this.changeCols({ itemId, nameStart, nameEnd });
    },
  },
};
</script>
<style scoped>
@import "../../assets/scss/canban/components/CanbanCard.css";
</style>
