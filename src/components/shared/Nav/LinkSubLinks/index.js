import { defineComponent, h, toRefs } from "vue";
import { useRouter } from "vue-router";
import "./style.scss";
export const LinkSubLinks = defineComponent({
  props: {
    link: { type: Object },
    toggleClass: { type: Function },
  },

  setup(props) {
    const { link, toggleClass } = toRefs(props);
    const router = useRouter();
    const { path } = router;
    const route = path === "/" || path === "/canban" || path === "/calendar";
    const cls = ["gradient", { active: route }];

    const sub = () =>
      h(
        <ul class="nav__sub">
          {link.value.items.map(({ id, url, title }) => {
            return (
              <router-link
                tag="li"
                key={id}
                to={url}
                active-class="active"
                exact
              >
                <router-link tag="a" to={url} active-class="active">
                  {title}
                </router-link>
              </router-link>
            );
          })}
        </ul>
      );

    const main = () =>
      h(
        <div onClick={toggleClass.value} class={cls}>
          <span class="icon" class={link.value.class}></span>
          <a href="#" class="link">
            {link.value.title}
          </a>
        </div>
      );

    return () =>
      h(
        <div>
          {main()}
          {sub()}
        </div>
      );
  },
});
