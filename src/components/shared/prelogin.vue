<script>
import { h } from "vue";
export default {
  setup() {
    return () =>
      h(
        <div>
          <router-link to="/login" tag="a" active-class="active">
            Логин
          </router-link>
          <router-link to="/reg" tag="a" active-class="active">
            Регистрация
          </router-link>
        </div>
      );
  },
};
</script>
<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: row !important;
}
a {
  text-decoration: none;
  color: #333;
}
a.active {
  color: red;
}
</style>
