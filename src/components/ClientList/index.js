import { ClientListItem } from "./ClientListItem";
import { computed, defineComponent, h, onMounted, reactive, watch } from "vue";
import { useStore } from "vuex";
import { Footer } from "../shared/Footer";
import "./style.scss";

export const ClientList = defineComponent({
  components: { ClientListItem, Footer },
  setup() {
    const store = useStore();
    const { dispatch, state } = store;

    const pageInfo = reactive({
      pageNumber: 0,
      pages: 0,
      countItems: 0,
    });
    onMounted(async () => {
      await dispatch("getTasks");
    });

    const clientItems = computed(() => {
      const { tasks } = state;

      const splitTasks = [...tasks].reduce(
        (acc, el) => {
          if (acc[acc.length - 1].length === 10) acc.push([]);
          acc[acc.length - 1].push(el);

          return acc;
        },
        [[]]
      );

      return splitTasks;
    });

    watch(clientItems, () => {
      const { value } = clientItems;
      const { tasks } = state;
      pageInfo.pages = value.length;
      pageInfo.countItems = tasks.length;
    });

    const changedPage = (num) => {
      pageInfo.pageNumber = num;
    };

    const thead = () => (
      <div class="thead">
        <div class="tr">
          <div class="td">Ответственный</div>
          <div class="td">Задача</div>
          <div class="td">Контакты</div>
          <div class="td">Дата завршения</div>
          <div class="td">Соблюдение сроков</div>
        </div>
      </div>
    );

    const tbody = () => {
      const { value } = clientItems;
      const { pageNumber } = pageInfo;

      const result = value[pageNumber]
        ? value[pageNumber].map((el) => (
            <div key={el.id}>
              <ClientListItem client={el} />
            </div>
          ))
        : [];

      return <div class="tbody">{result}</div>;
    };

    return () =>
      h(
        <>
          <div class="client__list">
            <div class="table list">
              {thead()}
              {tbody()}
            </div>
          </div>
          {pageInfo.pages > 1 ? (
            <Footer page={pageInfo} onChangePage={changedPage} />
          ) : (
            ""
          )}
        </>
      );
  },
});
