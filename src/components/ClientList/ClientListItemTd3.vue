<script>
import { computed, h, toRefs } from "vue";
export default {
  props: { task: { type: String } },
  setup(props) {
    const { task } = toRefs(props);
    const task_substring = computed(() => task.value.substring(0, 12));

    return () =>
      h(
        <div class="td">
          <div class="task">
            <div class="task__title">{task_substring.value}</div>
          </div>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
.table.list .tbody .tr .td:nth-child(3) {
  justify-content: center;
  text-align: center;
}
.table.list .tbody .tr .td:nth-child(3) {
  width: 15%;
}
.table.list .tbody .tr .td:nth-child(3) .task__title {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.table.list .tbody .tr .td:nth-child(3) .task__text {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #d80027;
}
</style>
