import { defineComponent, ref, computed, h, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Nav } from "../../components/shared/Nav";
import { Header } from "../../components/shared/Header";
import { CanbanSettings } from "../../components/shared/CanbanSettings";
import Popup22 from "../../components/popups/Popup22.vue";
import "./style.scss";

export const Content = defineComponent({
  components: { Nav, Header, CanbanSettings, Popup22 },
  setup() {
    const store = useStore();
    const { commit, state } = store;
    const mainActive = ref(false);
    const blockToggle = ref(false);

    const resize = function () {
      (window.innerWidth > 1250)
        ? blockToggle.value = false
        : blockToggle.value = true;
    };

    onMounted(() => {
      window.addEventListener("resize", resize);
      resize();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", resize);
    });

    const mainCls = computed(() => {
      return mainActive.value || blockToggle.value ? "active" : "";
    })

    const toggleMain = () => {
      console.log(blockToggle.value)
      if (!blockToggle.value) mainActive.value = !mainActive.value;
    };

    const popupCondition = computed(() => Object.keys(state.popup).length);


    const closePopup = () => {
      document.querySelector("body").classList.remove("noMove");
      commit("set_popup", {});
    };

    return () =>
      h(
        <>
          <Nav mainToggle={toggleMain} menuActive={!!mainCls.value} />
          <main class={mainCls.value}>
            <Header />
            <div class="canban">
              <CanbanSettings />
              <router-view></router-view>
            </div>
          </main>
          {popupCondition.value ? <Popup22 closePopup={closePopup} /> : ""}
        </>
      );
  },
});
