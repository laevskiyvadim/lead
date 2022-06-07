import { defineComponent, h, toRefs } from "vue";
import "./style.scss";
export const Footer = defineComponent({
  props: {
    page: { type: Object },
    onChangePage: { type: Function },
  },
  setup(props) {
    const { page, onChangePage } = toRefs(props);

    const changePage = (idx) => {
      onChangePage.value(idx);
    };

    const pagination = () => {
      const { pages, pageNumber } = page.value;
      const listArray = [];
      for (let index = 0; index < pages; index++) {
        listArray.push(index);
      }
      const prev = () => {
        if (listArray[pageNumber] > 0) changePage(listArray[pageNumber] - 1);
      };
      const next = () => {
        if (listArray[pageNumber] < pages - 1)
          changePage(listArray[pageNumber] + 1);
      };

      return (
        <>
          <div
            class="left__arrow"
            onClick={prev}
            disabled={listArray[pageNumber] < 1}
          >
            <img src="/assets/imgs/left_arrow.svg" alt="prev" />
          </div>
          <div class="lists">
            {listArray.map((el) => (
              <div
                onClick={() => changePage(el)}
                class={["list", { active: el === pageNumber }]}
              >
                {el + 1}
              </div>
            ))}
          </div>
          <div
            class="right__arrow"
            onClick={next}
            disabled={listArray[pageNumber] > pages - 2}
          >
            <img src="/assets/imgs/right_arrow.svg" alt="next" />
          </div>
        </>
      );
    };

    const currentEntries = () => {
      const { pageNumber, countItems } = page.value;
      const first = pageNumber * 10 + 1;
      const last =
        pageNumber * 10 + 10 < countItems ? pageNumber * 10 + 10 : countItems;

      return (
        <div class="pagination__data">
          Показаны <i>{` ${first}${last !== first ? "-" + last : ""} `}</i> из{" "}
          <i>{page.value.countItems}</i>
        </div>
      );
    };

    return () =>
      h(
        <footer class="pagination">
          {currentEntries()}
          <div class="pagination__lists">{pagination()}</div>
        </footer>
      );
  },
});
