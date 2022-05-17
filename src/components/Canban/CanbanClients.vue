<template>
  <div class="canban__body">
    <div class="canban__body__columns">
      <CanbanCard
        v-for="item of canban"
        :key="item.StageOfExecution"
        :StageOfExecution="item.StageOfExecution"
        :items="item.items"
        :changeCols="changeCols"
      />
    </div>
  </div>
</template>
<script>
import CanbanCard from "@/components/Canban/CanbanCard";
export default {
  components: { CanbanCard },
  async mounted() {
    const { dispatch } = this.$store;
    await dispatch("getTasks");
  },

  computed: {
    tasks() {
      const { state } = this.$store;
      return state.tasks;
    },

    canban() {
      const acc = {
        Задачи: { StageOfExecution: "Задачи", items: [] },
        "В работе": { StageOfExecution: "В работе", items: [] },
        Тестирование: { StageOfExecution: "Тестирование", items: [] },
        Завершённые: { StageOfExecution: "Завершённые", items: [] },
      };

      return this.tasks.reduce((acc, el) => {
        const { stageOfExecution } = el;

        acc[stageOfExecution].items.push(el);
        return acc;
      }, acc);
    },
  },
  methods: {
    changeCols({ itemId, nameStart, nameEnd }) {
      console.log(itemId, nameStart, nameEnd);
      // const elem = this.cols
      //   .find((x) => x.nameCol == nameStart)
      //   .items.find((x) => x.id == itemId);
      // const index = this.cols.indexOf(
      //   this.cols.find((x) => x.nameCol == nameStart)
      // );
      // this.cols[index].items = this.cols[index].items.filter(
      //   (x) => x.id != itemId
      // );
      // this.cols.find((x) => x.nameCol == nameEnd).items.push(elem);
    },
  },
  setup() {},
};
</script>
<style scoped>
@import "../../assets/scss/canban/components/CanbanClients.css";
</style>
