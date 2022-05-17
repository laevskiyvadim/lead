<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { h } from "vue";
import preLogin from "../components/shared/prelogin.vue";
export default {
  components: {
    preLogin,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const router = useRouter();

    const submit = async () => {
      const { dispatch } = store;
      const { push } = router;
      const data = {
        email: email.value,
        password: password.value,
      };
      await dispatch("login", data).then(() => {
        push({ name: "Home" });
      });
    };

    const onChangeEmail = (e) => {
      email.value = e.target.value;
    };
    const onChangePassword = (e) => {
      password.value = e.target.value;
    };

    return () =>
      h(
        <div class="form">
          <pre-login></pre-login>
          <div>
            <label for="login">Логин</label>
            <input
              type="text"
              id="login"
              onChange={(e) => {
                onChangeEmail(e);
              }}
            />
          </div>
          <div>
            <label for="pass">Пароль</label>
            <input
              type="password"
              id="pass"
              onChange={(e) => {
                onChangePassword(e);
              }}
            />
          </div>
          <button onclick={submit}>Логин</button>
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
