<script>
import { h, toRefs } from "vue";
export default {
  props: { first_name: { type: String }, last_name: { type: String } },
  setup(props) {
    const { first_name, last_name } = toRefs(props);

    return () =>
      h(
        <div class="td">
          <div class="text">
            <div class="text_name">
              {first_name.value} {last_name.value}
            </div>
          </div>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
.table.list .tbody .tr .td:nth-child(2) {
  justify-content: center;
  text-align: center;
}
.table.list .tbody .tr .td:nth-child(2) {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.table.list .tbody .tr .td:nth-child(2) .img {
  border-radius: 14px;
  width: 54.54px;
  height: 55px;
  margin-right: 10px;
}

.table.list .tbody .tr .td:nth-child(2) .text__title {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

.table.list .tbody .tr .td:nth-child(2) .text__name {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.8);
}
</style>
