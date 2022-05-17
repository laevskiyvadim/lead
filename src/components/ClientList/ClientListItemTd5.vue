<script>
import { h, toRefs } from "vue";
export default {
  props: { endTime: { type: String } },
  setup(props) {
    const { endTime } = toRefs(props);
    return () => h(<div class="td">{endTime.value}</div>);
  },
};
</script>
<style scoped lang="scss">
.table.list .tbody .tr .td:nth-child(5) {
  justify-content: center;
  text-align: center;
}
.table.list .tbody .tr .td:nth-child(5) {
  width: 20%;
}
.table.list .tbody .tr .td:nth-child(5) {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #6418c3;
}
</style>
