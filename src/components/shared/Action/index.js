import { defineComponent, h } from "vue";
import "./style.scss";
export const Action = defineComponent({
  setup() {
    return () =>
      h(
        <div class="act">
          <router-link
            tag="a"
            to="/canban"
            class="act__item"
            active-class="active"
          >
            <span>
              <b></b>
              <b></b>
              <b></b>
            </span>
            <span>Канбан</span>
          </router-link>
          <router-link
            tag="a"
            to="/list"
            class="act__item"
            active-class="active"
            exact
          >
            <span class="i">
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>Список</span>
          </router-link>
        </div>
      );
  },
});
