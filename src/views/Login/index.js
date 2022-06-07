import { defineComponent, reactive, h } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { PreLogin } from "../../components/shared/PreLogin";
import "./style.scss";
export const Login = defineComponent({
  components: {
    PreLogin,
  },
  setup() {
    const data = reactive({ email: "", password: "" });
    const store = useStore();
    const router = useRouter();

    const submit = async () => {
      const { dispatch } = store;
      const { push } = router;

      await dispatch("login", data).then(() => {
        push({ name: "Canban" });
      });
    };

    const onChangeInput = (e, name) => {
      data[name] = e.target.value;
    };

    const prevent = (e) => {
      e.preventDefault();
    };

    return () =>
      h(
        <form class="form" onClick={prevent}>
          <pre-login></pre-login>
          <div>
            <label for="login">Логин (Email)</label>
            <input
              type="text"
              id="login"
              autocomplete
              onChange={() => onChangeInput(event, "email")}
            />
          </div>
          <div>
            <label for="pass">Пароль</label>
            <input
              type="password"
              autocomplete
              id="pass"
              onChange={() => onChangeInput(event, "password")}
            />
          </div>
          <button onclick={submit}>Логин</button>
        </form>
      );
  },
});
