<script>
import { h } from "vue";
import preLogin from "../components/shared/prelogin.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    preLogin,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { dispatch } = store;
    const { push } = router;

    const data = {
      phone: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      is_active: true,
    };

    const submit = () => {
      dispatch("registration", data).then(() => {
        push({ name: "Login" });
      });
    };

    const onChangeFirst = (e) => {
      data.first_name = e.target.value;
    };
    const onChangeLast = (e) => {
      data.last_name = e.target.value;
    };
    const onChangePhone = (e) => {
      data.phone = e.target.value;
    };
    const onChangeEmail = (e) => {
      data.email = e.target.value;
    };
    const onChangePassword = (e) => {
      data.password = e.target.value;
    };

    return () =>
      h(
        <div class="form">
          <pre-login></pre-login>
          <div>
            <label for="first">Имя</label>
            <input type="text" id="first" onChange={onChangeFirst} />
          </div>
          <div>
            <label for="last">Фамилия</label>
            <input type="text" id="last" onChange={onChangeLast} />
          </div>
          <div>
            <label for="phone">Телефон</label>
            <input type="text" id="phone" onChange={onChangePhone} />
          </div>
          <div>
            <label for="email">@mail</label>
            <input type="text" id="email" onChange={onChangeEmail} />
          </div>
          <div>
            <label for="pass">Пароль</label>
            <input type="text" id="pass" onChange={onChangePassword} />
          </div>
          <button onclick={submit}>Регистрация</button>
        </div>
      );
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  div {
    display: flex;
    min-width: 300px;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
  }
}
</style>
