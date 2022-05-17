<script>
import { computed, h } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const photo = "/assets/imgs/60x60.jpg";
    const { state } = store;

    const first_name = computed(() => state.currentUser.first_name);
    const last_name = computed(() => state.currentUser.last_name);

    const click = (e) => {
      e.preventDefault();
    };

    const cart = () => (
      <div class="cart">
        <img src={photo} />
        <div class="data">
          <a onclick={click}>
            <div class="name">
              {first_name.value} {last_name.value}
            </div>
          </a>
        </div>
      </div>
    );

    const logout = () => {
      store.dispatch("logout").then(() => {
        router.push({ name: "Login" });
      });
    };
    return () =>
      h(
        <header class="header">
          {cart()}
          <button onClick={logout}>Выход</button>
        </header>
      );
  },
};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background: #ffffff;
  box-shadow: 18px 4px 35px rgba(0, 0, 0, 0.02);
  align-items: center;
  padding-left: 20px;
  margin-right: 20px;
  flex-wrap: wrap;
}
.cart {
  display: flex;
  font-family: "Cairo";
  margin-right: 50px;

  img {
    width: 57px;
    height: 57px;
    background: #c4c4c4;
    border-radius: 14px;
    margin-right: 24px;
  }

  .name {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    color: #000000;
  }

  a {
    text-decoration: none;
  }
}
button {
  padding: 0 20px;
  background: #6518c3b2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  font-family: "Cairo";
  font-weight: 700;
  font-size: 15px;
  line-height: 34px;
  color: #ffffff;
  margin-right: 20px;
}
</style>
