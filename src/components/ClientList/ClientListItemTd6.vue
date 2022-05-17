<script>
import { h, onBeforeMount, ref, toRefs } from "vue";
import { useStore } from "vuex";
export default {
  props: { client: { type: Object } },
  setup(props) {
    const { client } = toRefs(props);
    const store = useStore();
    const { commit } = store;
    const status = ref("");

    onBeforeMount(() => deadlinesType());

    const openPopup = (e) => {
      e.preventDefault();
      commit("set_popup", client.value);
    };

    const deadlinesType = () => {
      const { endTime, startTime } = client.value;
      let a = new Date(endTime);
      let b = new Date(startTime);
      let c = new Date();
      let obs = Math.round((+a - +b) / 1000 / 60 / 60);
      let cur = Math.round((+c - +b) / 1000 / 60 / 60);
      let g = cur / obs;

      if (g < 0 || g > 0.6) {
        status.value = "hot";
      } else if (g < 0.3) {
        status.value = "cold";
      } else if (g < 0.6) {
        status.value = "medium";
      }
    };

    const taskStatus = () =>
      h(
        status.value == "cold" ? (
          <div class="cold"> Сроки соблюдаются </div>
        ) : status.value == "medium" ? (
          <div class="medium"> Слабое отставание </div>
        ) : (
          <div class="hot"> Сильное отставание </div>
        )
      );

    return () =>
      h(
        <div class="td">
          {taskStatus()}
          <a href onclick={openPopup}>
            <img src="/assets/imgs/option.svg" alt="option" title="изменить" />
          </a>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
.table.list .tbody .tr .td:nth-child(6) {
  justify-content: center;
  text-align: center;
}
.table.list .tbody .tr .td:nth-child(6) {
  width: 20%;
}
.table.list .tbody .tr .td:nth-child(6) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table.list .tbody .tr .td:nth-child(6) .hot,
.table.list .tbody .tr .td:nth-child(6) .medium,
.table.list .tbody .tr .td:nth-child(6) .cold {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 150px;
  height: 49px;
  border-radius: 14px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-right: 40px;
}

.table.list .tbody .tr .td:nth-child(6) .hot {
  background: rgba(216, 0, 39, 0.63);
  color: #ffffff;
}

.table.list .tbody .tr .td:nth-child(6) .medium {
  background: #ffebcc;
  color: #ffab2d;
}

.table.list .tbody .tr .td:nth-child(6) .cold {
  background: #dfedf2;
  color: #34a8d9;
}
</style>
