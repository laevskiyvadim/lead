import { CanbanCardItem } from "./CanbanCardItem";
import { CanbanCardFree } from "./CanbanCardFree";
import { computed, defineComponent, h, toRefs } from "vue";
import "./style.scss";

export const CanbanCard = defineComponent({
  props: {
    items: { type: Object },
    changeCols: { type: Function },
    StageOfExecution: { type: String },
    startDrag: { type: Function },
  },

  components: { CanbanCardItem, CanbanCardFree },

  setup(props) {
    const { items, changeCols, StageOfExecution, startDrag } = toRefs(props);

    const drop = ({ itemId, nameStart, nameEnd }) => {
      changeCols.value({ itemId, nameStart, nameEnd });
    };

    const itemsToRender = computed(() => {
      const { value } = items;
      if (value.length) {
        return value.map((item) => (
          <CanbanCardItem
            key={item.id}
            card={item}
            startDrag={startDrag.value}
            drop={(obj) => drop(obj, item)}
            nameCol={StageOfExecution.value}
            draggable="true"
          />
        ));
      } else {
        return <CanbanCardFree name={StageOfExecution.value} drop={drop} />;
      }
    });

    return () =>
      h(
        <div class="card">
          <div class="card__title">
            <div class="text">
              <div class="text__up">{StageOfExecution.value}</div>
            </div>
          </div>
          <div class="items__can" id="items__can">
            {itemsToRender.value}
          </div>
        </div>
      );
  },
});
