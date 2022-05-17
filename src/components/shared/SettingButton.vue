<script>
import { h } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const { commit } = store;
    const addTask = () => {
      commit("set_popup", { id: null });
    };

    return () =>
      h(
        <div class="settings__subtitle">
          <button class="addclient" onclick={addTask}>
            Добавить задачу
            <img src="/assets/imgs/+.svg" />
          </button>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
.settings__subtitle {
  padding-top: 0px;
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 35px;
  justify-content: space-between;
  margin-right: 20px;
}

.addclient {
  width: 220px;
  outline: none;
  background: #1cbbff;
  color: #ffffff;
  font-size: 18px;
  img {
    padding-left: 11px;
  }
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  box-sizing: border-box;
  border-radius: 14px;
  font-family: "Cairo";
  font-style: normal;
  font-weight: bold;
  color: #161616;
}
</style>
