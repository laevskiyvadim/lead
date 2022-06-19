import { defineComponent, h } from "vue";
import { useStore } from "vuex";
import { openEditPopup } from "../../utils";
import "./style.scss";
export const SettingButton = defineComponent({
  setup() {
    const store = useStore();
    const addTask = (event) => {
      openEditPopup(event, store, { value: { id: null } })
    };

    return () =>
      h(
        <div class="settings__subtitle">
          <button class="addclient" onclick={() => addTask(event)}>
            Добавить задачу
            <img src="/assets/imgs/+.svg" class="add" alt="Добавить" />
          </button>
        </div>
      );
  },
});
