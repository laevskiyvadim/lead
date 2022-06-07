import { defineComponent, h, reactive } from "vue";
import { PreLogin } from "../../components/shared/PreLogin";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import "./style.scss";
export const Registration = defineComponent({
  components: {
    PreLogin,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { dispatch } = store;
    const { push } = router;

    const data = reactive({
      phone: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });

    const submit = () => {
      dispatch("registration", data)
        .then(() => {
          push({ name: "Login" });
        })
        .catch((e) => e);
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
            <label for="first">Имя</label>
            <input
              type="text"
              id="first"
              autocomplete
              onChange={() => onChangeInput(event, "first_name")}
            />
          </div>
          <div>
            <label for="last">Фамилия</label>
            <input
              type="text"
              id="last"
              autocomplete
              onChange={() => onChangeInput(event, "last_name")}
            />
          </div>
          <div>
            <label for="phone">Телефон</label>
            <input
              type="text"
              id="phone"
              autocomplete
              onChange={() => onChangeInput(event, "phone")}
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              autocomplete
              onChange={() => onChangeInput(event, "email")}
            />
          </div>
          <div>
            <label for="pass">Пароль</label>
            <input
              type="password"
              id="pass"
              autocomplete
              onChange={() => onChangeInput(event, "password")}
            />
          </div>
          <button onclick={submit}>Регистрация</button>
        </form>
      );
  },
});
