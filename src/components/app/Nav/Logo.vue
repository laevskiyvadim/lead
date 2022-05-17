
<script>
import { h, toRefs } from "vue";
export default {
  props: { toggleMenu: { type: Function } },

  setup(props) {
    const { toggleMenu } = toRefs(props);

    return () =>
      h(
        <div class="logo">
          <router-link to="/" class="banner">
            <img src="/assets/imgs/leadozvon.svg" alt="logo" />
          </router-link>
          <a href="#" onclick={toggleMenu.value}>
            <img src="/assets/imgs/hamburgermenu.svg" alt="hamburgerMenu" />
          </a>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
.menu.active .logo {
  margin: 0;
}

.menu .logo {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px;
  padding: 10px;
}

.menu .logo a:nth-child(2) {
  padding-bottom: 8px;
}

.menu.active .banner {
  display: none;
}
</style>