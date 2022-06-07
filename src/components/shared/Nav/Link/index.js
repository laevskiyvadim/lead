import { defineComponent, h, toRefs } from "vue";
import "./style.scss";
export const Link = defineComponent({
  props: { link: { type: Object } },

  setup(props) {
    const { link } = toRefs(props);

    const subLinks = () =>
      h(
        <>
          <span class="icon" class={link.value.class}></span>
          <router-link to={link.value.url} tag="a" class="link">
            {link.value.title}
          </router-link>
        </>
      );

    return () =>
      h(
        <router-link
          class="gradient"
          tag="div"
          to={link.value.url}
          active-class="active"
        >
          {subLinks()}
        </router-link>
      );
  },
});
