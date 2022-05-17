<script>
import ClientListItem from "../components/ClientList/ClientListItem";
import CanbanSettings from "../components/shared/CanbanSettings.vue";
import Nav from "@/components/app/Nav";
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";
import Popup22 from "@/components/popups/Popup22";
import { computed, h, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const { dispatch, commit, state } = store;
    const mainActive = ref(false);
    const popup22 = ref(false);
    const router = useRoute();
    const toggleMain = () => {
      mainActive.value = !mainActive.value;
    };

    const footer = () => (router.path === "/" ? h(<Footer />) : "");
    const mainCls = () => (mainActive.value ? "active" : "");
    const noMove = () => (popup22.value ? "no-move" : "");
    const popupCondition = computed(() => Object.keys(state.popup).length);
    const closePopup = () => {
      document.querySelector("body").classList.remove("noMove");
      commit("set_popup", {});
    };
    onMounted(async () => await dispatch("getTasks"));

    const clientItems = computed(() => state.tasks);
    const thead = () => (
      <div class="thead">
        <div class="tr">
          <div class="td"></div>
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
      const mutationArray = () =>
        value.map((el) => (
          <div key={el.id}>
            <ClientListItem client={el} />
          </div>
        ));
      return <div class="tbody">{mutationArray()}</div>;
    };

    return () =>
      h(
        <div>
          <div class={noMove}>
            <Nav mainToggle={toggleMain} />
            <main class={mainCls()}>
              <Header />
              <div class="canban">
                <CanbanSettings />

                <div class="client__list">
                  <div class="table list">
                    {thead()}
                    {tbody()}
                  </div>
                </div>
              </div>
              {footer()}
            </main>
            {popupCondition.value ? <Popup22 closePopup={closePopup} /> : ""}
          </div>
        </div>
      );
  },

  components: { ClientListItem, CanbanSettings },
};
</script>
<style scoped lang="scss">
.canban {
  margin: 0 20px;
}
input[type="checkbox"] {
  display: none;
}

label.tdLabel {
  width: 20px;
  height: 20px;
  border: 2px solid #bebebe;
  border-radius: 2px;
}

input[type="checkbox"]:checked + .tdLabel {
  box-sizing: border-box;
  border: 2px solid #6418c3;
  align-items: center;
  div {
    background: #6418c3;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    margin: 3px;
  }
}

.table.list .thead .tr .td:nth-child(2),
.table.list .thead .tr .td:nth-child(3),
.table.list .thead .tr .td:nth-child(4),
.table.list .thead .tr .td:nth-child(5),
.table.list .thead .tr .td:nth-child(6) {
  justify-content: center;
  text-align: center;
}

.table.list .thead .tr .td:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
}

.table.list .thead .tr .td:nth-child(2) {
  width: 20%;
}

.table.list .thead .tr .td:nth-child(3) {
  width: 15%;
}

.table.list .thead .tr .td:nth-child(4) {
  width: 20%;
}

.table.list .thead .tr .td:nth-child(5) {
  width: 20%;
}

.table.list .thead .tr .td:nth-child(6) {
  width: 20%;
}

.table.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  .thead {
    display: flex;
  }
  .thead .tr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    height: 90px;
    font-family: "Cairo";
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    letter-spacing: 0.01em;
    color: #202020;
    border-radius: 14px 14px 0px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 37px;
    color: #000000;
  }
  .tbody {
    display: flex;
    flex-direction: column;
    .tr {
      margin-top: 5px;
    }
  }
}
</style>
