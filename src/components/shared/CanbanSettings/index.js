import { Action } from "../Action";
import { SettingButton } from "../SettingButton";
import { defineComponent, h } from "vue";
import "./style.scss";
export const CanbanSettings = defineComponent({
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
});
