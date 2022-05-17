<script>
import { h } from "vue";
export default {
  setup() {
    return () =>
      h(
        <div class="td">
          <div></div>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
input[type="checkbox"] {
  display: none;
}

label.listLabel {
  width: 20px;
  height: 20px;
  border: 2px solid #bebebe;
  border-radius: 2px;
}

input[type="checkbox"]:checked + .listLabel {
  box-sizing: border-box;
  border: 2px solid #6418c3;
  align-items: center;
}

input[type="checkbox"]:checked + .listLabel div {
  background: #6418c3;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin: 3px;
}

.table.list .tbody .tr .td:nth-child(1) {
  justify-content: center;
  text-align: center;
  width: 5%;
}
</style>
