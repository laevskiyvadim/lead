import { CanbanCard } from "./CanbanCard";
import { useStore } from "vuex";
import { defineComponent, ref, computed, h, onBeforeMount } from "vue";
import "./style.scss";

export const Canban = defineComponent({
  components: { CanbanCard },
  setup() {
    const store = useStore();
    const { state, dispatch } = store;
    const obj = ref({});
    onBeforeMount(async () => {
      await dispatch("getTasks");
    });
    const tasks = computed(() => {
      return state.tasks;
    });

    const canban = computed(() => {
      const { value } = tasks;
      const acc = {
        Задачи: { StageOfExecution: "Задачи", items: [] },
        "В работе": { StageOfExecution: "В работе", items: [] },
        Тестирование: { StageOfExecution: "Тестирование", items: [] },
        Завершенные: { StageOfExecution: "Завершенные", items: [] },
      };
      return value.length
        ? value.reduce((acc, el) => {
            const { stageOfExecution } = el;
            acc[stageOfExecution].items.push(el);
            return acc;
          }, acc)
        : acc;
    });

    const startDrag = (item) => (obj.value = item);

    const changeCols = async ({ itemId, nameStart, nameEnd }) => {
      console.log(itemId, nameStart, nameEnd, obj.value);

      if (nameStart !== nameEnd) {
        const { users, ...data } = obj.value;
        users;
        await dispatch("updateTask", { ...data, stageOfExecution: nameEnd });
      }
    };

    const cards = computed(() => {
      const { value } = canban;

      return [...Object.values(value)].map((item, idx) => (
        <canban-card
          key={idx}
          StageOfExecution={item.StageOfExecution}
          items={item.items}
          changeCols={changeCols}
          startDrag={startDrag}
        />
      ));
    });

    return () =>
      h(
        <div class="canban__body">
          <div class="canban__body__columns">{cards.value}</div>
        </div>
      );
  },
});
