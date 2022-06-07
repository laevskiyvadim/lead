import { computed, defineComponent, h } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import "./style.scss";
export const Header = defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const photo = "/assets/imgs/60x60.jpg";
    const { state } = store;

    const first_name = computed(() => state.currentUser.first_name);
    const last_name = computed(() => state.currentUser.last_name);

    const click = (e) => {
      e.preventDefault();
    };

    const cart = () => (
      <div class="cart">
        <img src={photo} class="photo" alt="Фото" />
        <div class="data">
          <a onclick={click} href="#">
            <div class="name">
              {first_name.value} {last_name.value}
            </div>
          </a>
        </div>
      </div>
    );

    const logout = () => {
      store.dispatch("logout").then(() => {
        router.push({ name: "Login" });
      });
    };
    return () =>
      h(
        <header class="header">
          {cart()}
          <button onClick={logout}>Выход</button>
        </header>
      );
  },
});
