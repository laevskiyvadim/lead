import { toRefs, h, defineComponent } from "vue";
import { dragenter, dragleave, dragover, onDrop } from "../utils";
import "./style.scss";
export const CanbanCardFree = defineComponent({
  props: { name: { type: String }, drop: { type: Function } },
  setup(props) {
    const { name, drop } = toRefs(props);

    return () =>
      h(
        <div
          class="item"
          onDrop={() => onDrop(event, name, drop)}
          onDragover={dragover}
          onDragleave={dragleave}
          onDragenter={dragenter}
        ></div>
      );
  },
});
