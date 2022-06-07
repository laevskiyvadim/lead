import { setData } from "@/components/utils";
import {
  reactive,
  toRefs,
  computed,
  h,
  onBeforeMount,
  watch,
  defineComponent,
} from "vue";
import { useStore } from "vuex";
import { openEditPopup } from "../../../utils";
import { dragenter, dragleave, dragover, onDragStart, onDrop } from "../utils";
import "./style.scss";
export const CanbanCardItem = defineComponent({
  props: {
    card: { type: Object },
    nameCol: { type: String },
    drop: { type: Function },
    startDrag: { type: Function },
  },
  setup(props) {
    const store = useStore();
    const { card, nameCol, drop, startDrag } = toRefs(props);
    const data = reactive({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      task: "",
      endTime: "",
      startTime: "",
      shortTaskTitle: "",
      className: "",
    });

    onBeforeMount(() => setData(card, data, 20));
    watch(card, () => setData(card, data, 20));

    const timerTitle = computed(() => {
      const type = data.className;
      switch (type) {
        case "cold":
          return "в срок";
        case "medium":
          return "запоздание";
        case "hot":
          return "горят сроки";
        default:
          return "";
      }
    });

    return () =>
      h(
        <div
          class="item"
          onDragstart={() => onDragStart(event, card, nameCol, startDrag)}
          onDragleave={dragleave}
          onDragenter={dragenter}
          onDragover={dragover}
          onDrop={() => onDrop(event, nameCol, drop)}
          onClick={() => openEditPopup(event, store, card)}
        >
          <div class="item__title">
            {timerTitle.value}
            <div class="right">
              <img src="/assets/imgs/clock2.svg" alt="Дата завершения" />
              <div class="text">{data.endTime}</div>
            </div>
          </div>
          <div class="item__body">
            <div class="up">{data.shortTaskTitle}</div>
            <div class="down">
              {data.first_name} {data.last_name}
            </div>
          </div>
          <div class="line">
            <div class="inline" class={data.className}></div>
          </div>
          <div
            class="right"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <a href={"tel:" + data.phone}>
              <img
                src="/assets/imgs/phone.svg"
                alt={"tel:" + data.phone}
                class="contacts"
              />
            </a>
            <a href={"mailto:" + data.email}>
              <img
                src="/assets/imgs/mail.svg"
                alt={"mailto:" + data.email}
                class="contacts"
              />
            </a>
          </div>
        </div>
      );
  },
});
