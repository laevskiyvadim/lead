<script>
import { h } from "vue";

export default {
  setup() {
    return () => h(<router-view />);
  },
};
</script>
<style scoped lang="scss">
@import "../src/assets/scss/app/App.css";

.no-move {
  overflow-x: hidden;
}
</style>
