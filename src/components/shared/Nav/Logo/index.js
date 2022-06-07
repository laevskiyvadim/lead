import { defineComponent, h, toRefs } from "vue";
import "./style.scss";
export const Logo = defineComponent({
  props: { toggleMenu: { type: Function } },

  setup(props) {
    const { toggleMenu } = toRefs(props);

    return () =>
      h(
        <div class="logo">
          <router-link to="/canban" class="banner">
            <img src="/assets/logo.png" alt="logotype" class="logo" />
            <p>Terma</p>
          </router-link>
          <a href="#" onclick={toggleMenu.value}>
            <img
              src="/assets/imgs/hamburgermenu.svg"
              alt="Menu"
              class="hamburger"
            />
          </a>
        </div>
      );
  },
});
