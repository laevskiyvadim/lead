<script>
import { h, toRefs } from "vue";
export default {
  props: { phone: { type: String }, email: { type: String } },
  setup(props) {
    const { email, phone } = toRefs(props);

    const mail = () => (
      <div class="mail">
        <a href={"mailto:" + email.value}>
          <img src="/assets/imgs/iconMail.svg" alt="" />
          {email.value}
        </a>
      </div>
    );
    const contactPhone = () => (
      <div class="phone">
        <a href={"tel:" + phone.value}>
          <img src="/assets/imgs/iconPhone.svg" alt={phone.value} />
        </a>
        <a href={"sms:" + phone.value}>
          <img src="/assets/imgs/iconWhats.svg" alt="" />
        </a>
        <a href={"tel:" + phone.value}>{phone.value}</a>
      </div>
    );

    return () =>
      h(
        <div class="td">
          <div class="contacts">
            {mail()}
            {contactPhone()}
          </div>
        </div>
      );
  },
};
</script>
<style scoped lang="scss">
.table.list .tbody .tr .td:nth-child(4) {
  justify-content: center;
  text-align: center;
}
.table.list .tbody .tr .td:nth-child(4) {
  width: 20%;
}
.table.list .tbody .tr .td:nth-child(4) .mail a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #202020;
}

.table.list .tbody .tr .td:nth-child(4) .mail a img {
  margin-right: 8px;
}

.table.list .tbody .tr .td:nth-child(4) .phone {
  display: flex;
  margin-top: 9px;
  justify-content: center;
}

.table.list .tbody .tr .td:nth-child(4) .phone a:nth-child(1),
.table.list .tbody .tr .td:nth-child(4) .phone a:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6eeff;
  border-radius: 12px;
  width: 25px;
  height: 25px;
  margin-right: 6px;
}

.table.list .tbody .tr .td:nth-child(4) .phone a:nth-child(1) img,
.table.list .tbody .tr .td:nth-child(4) .phone a:nth-child(2) img {
  height: 14px;
  width: 12px;
}

.table.list .tbody .tr .td:nth-child(4) .phone a:nth-child(3) {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
}
</style>
