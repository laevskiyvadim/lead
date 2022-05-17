<script>
import CanbanSettings from "../components/shared/CanbanSettings";
import CanbanClients from "../components/Canban/CanbanClients";
import Nav from "@/components/app/Nav";
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";
import Popup22 from "@/components/popups/Popup22";
import { computed, h, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  components: { CanbanSettings, CanbanClients },
  setup() {
    const store = useStore();
    const { commit } = store;
    const mainActive = ref(false);
    const popup22 = ref(false);
    const router = useRoute();
    const toggleMain = () => {
      mainActive.value = !mainActive.value;
    };

    const footer = () => (router.path === "/" ? h(<Footer />) : "");

    const mainCls = () => (mainActive.value ? "active" : "");
    const noMove = () => (popup22.value ? "no-move" : "");
    const popupCondition = computed(
      () => Object.keys(store.state.popup).length
    );
    const closePopup = () => {
      document.querySelector("body").classList.remove("noMove");
      commit("set_popup", {});
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
                <CanbanClients />
              </div>
              {footer()}
            </main>
            {popupCondition.value ? <Popup22 closePopup={closePopup} /> : ""}
          </div>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
.canban {
  margin: 0 20px;
}
</style>
