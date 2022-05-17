<script>
import Action from "./Action.vue";
import SettingButton from "./SettingButton.vue";
import { h } from "vue";
export default {
  setup() {
    return () =>
      h(
        <div class="canban__settings">
          <div class="settings__title">
            <SettingButton />
            <Action />
          </div>
        </div>
      );
  },
  components: { Action },
};
</script>
<style scoped lang="scss">
.settings__title {
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 35px;
  justify-content: space-between;
  margin-right: 20px;
}

.canban__settings {
  margin: 20px 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
}
</style>
