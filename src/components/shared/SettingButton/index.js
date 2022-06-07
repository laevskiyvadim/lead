import { defineComponent, h } from "vue";
import { useStore } from "vuex";
import "./style.scss";
export const SettingButton = defineComponent({
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
            <img src="/assets/imgs/+.svg" class="add" alt="Добавить" />
          </button>
        </div>
      );
  },
});
