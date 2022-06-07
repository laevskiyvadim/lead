import { defineComponent, h } from "vue";
import "./style.scss";
export const PreLogin = defineComponent({
  setup() {
    return () =>
      h(
        <div class="prelogin">
          <router-link to="/login" tag="a" active-class="active">
            Логин
          </router-link>
          <router-link to="/reg" tag="a" active-class="active">
            Регистрация
          </router-link>
        </div>
      );
  },
});
