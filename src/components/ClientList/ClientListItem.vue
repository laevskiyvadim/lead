<script>
import ClientListItemTd1 from "@/components/ClientList/ClientListItemTd1";
import ClientListItemTd2 from "@/components/ClientList/ClientListItemTd2";
import ClientListItemTd3 from "@/components/ClientList/ClientListItemTd3";
import ClientListItemTd4 from "@/components/ClientList/ClientListItemTd4";
import ClientListItemTd5 from "@/components/ClientList/ClientListItemTd5";
import ClientListItemTd6 from "@/components/ClientList/ClientListItemTd6";
import { h, toRefs } from "vue";
export default {
  props: { client: { type: Object } },
  setup(props) {
    const { client } = toRefs(props);
    const { users, user, task, endTime } = client.value;
    const taskUser = users.filter((el) => el.id == user);
    const { first_name, last_name, phone, email } = taskUser[0];

    return () =>
      h(
        <div class="tr">
          <ClientListItemTd1 />
          <ClientListItemTd2 first_name={first_name} last_name={last_name} />
          <ClientListItemTd3 task={task} />
          <ClientListItemTd4 phone={phone} email={email} />
          <ClientListItemTd5 endTime={endTime} />
          <ClientListItemTd6 client={client.value} />
        </div>
      );
  },
  components: {
    ClientListItemTd1,
    ClientListItemTd2,
    ClientListItemTd3,
    ClientListItemTd4,
    ClientListItemTd5,
    ClientListItemTd6,
  },
};
</script>
<style scoped lang="scss">
.table.list .tbody .tr {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  height: 90px;
  font-family: "Cairo";
  font-style: normal;
  font-weight: normal;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #202020;
}

.table.list .tbody .tr {
  margin-top: 5px;
}

.table.list .tbody .tr:hover {
  background: #ffffff;
  box-shadow: 0px 1px 28px rgba(0, 0, 0, 0.12);
  border-radius: 1px;
}
</style>
