import {
  defineComponent,
  h,
  onBeforeMount,
  reactive,
  toRefs,
  watch,
} from "vue";
import { useStore } from "vuex";
import { setData } from "@/components/utils";
import "./style.scss";
import { openEditPopup } from "../../utils";

export const ClientListItem = defineComponent({
  props: { client: { type: Object } },
  setup(props) {
    const { client } = toRefs(props);
    const store = useStore();
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

    onBeforeMount(() => setData(client, data, 12));
    watch(client, () => setData(client, data, 12));

    const taskStatus = () =>
      data.className == "cold" ? (
        <div class="cold"> Сроки соблюдаются </div>
      ) : data.className == "medium" ? (
        <div class="medium"> Слабое отставание </div>
      ) : (
        <div class="hot"> Сильное отставание </div>
      );

    const mail = () => (
      <div class="mail">
        <a href={"mailto:" + data.email}>
          <img src="/assets/imgs/iconMail.svg" alt={data.email} />
          {data.email}
        </a>
      </div>
    );

    const contactPhone = () => (
      <div class="phone">
        <a href={"tel:" + data.phone}>
          <img src="/assets/imgs/iconPhone.svg" alt={data.phone} />
        </a>
        <a href={"sms:" + data.phone}>
          <img src="/assets/imgs/iconWhats.svg" alt={data.phone} />
        </a>
        <a href={"tel:" + data.phone}>{data.phone}</a>
      </div>
    );

    const tr1 = () => (
      <div class="td">
        <div class="text_name">
          {data.first_name} {data.last_name}
        </div>
      </div>
    );

    const tr2 = () => (
      <div class="td">
        <div class="task__title">{data.shortTaskTitle}</div>
      </div>
    );

    const tr3 = () => (
      <div class="td">
        <div class="contacts">
          {mail()}
          {contactPhone()}
        </div>
      </div>
    );

    const tr4 = () => <div class="td">{data.endTime}</div>;

    const tr5 = () => (
      <div class="td">
        {taskStatus()}
        <a href onclick={() => openEditPopup(event, store, client)}>
          <img src="/assets/imgs/option.svg" alt="option" title="изменить" />
        </a>
      </div>
    );

    return () =>
      h(
        <div class="tr">
          {tr1()}
          {tr2()}
          {tr3()}
          {tr4()}
          {tr5()}
        </div>
      );
  },
});
