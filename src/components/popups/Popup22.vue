<template>
  <div class="popup" @click.prevent="closePopup">
    <div class="popupBody" @click.stop>
      <div class="container">
        <TitlePopup :Task="task?.task" :closePopup="closePopup" />
        <div class="body">
          <div class="date">
            <div class="item">
              <label for="startTime">Время начала</label>
              <input
                type="date"
                class="startTime"
                v-model="task.startTime"
                id="startTime"
              />
            </div>
            <div class="item">
              <label for="endTime">Время окончания</label>
              <input
                type="date"
                class="endTime"
                v-model="task.endTime"
                id="endTime"
              />
            </div>
          </div>

          <div class="task">
            <label for="textarea">Задача</label>
            <textarea cols="30" rows="10" v-model="task.task" id="textarea" />
          </div>
          <template v-if="task.id != null">
            <select @change="onChangeUser($event)">
              <option
                :value="user.id"
                v-for="user of task.users"
                :key="user.id"
                :selected="user.id == task.user"
              >
                {{ user.first_name + " " + user.last_name }}
              </option>
            </select>

            <div class="phone">
              <label for="phone">Телефон ответсвенного:</label>
              <input
                type="text"
                id="phone"
                :value="user_info?.phone"
                readonly
              />
            </div>
            <div class="email">
              <label for="email">Email Ответственного:</label>
              <input
                type="text"
                id="email"
                :value="user_info?.email"
                readonly
              />
            </div>
          </template>
        </div>
        <button @click="sendForm">{{ send }}</button>
        <button @click="deleteTask" v-if="task.id != null">
          Удалить задачу
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import TitlePopup from "./components/popupTitle";
export default {
  props: { closePopup: { type: Function } },
  data() {
    return { task: {} };
  },

  computed: {
    user_info() {
      const { user, users } = this.task;
      return users?.filter((element) => element.id == user)[0] || null;
    },
    send() {
      return this.task.id ? "Изменить задачу" : "Добавить задачу";
    },
  },

  mounted() {
    const { $store } = this;
    this.task = $store.state.popup;
  },
  methods: {
    onChangeUser($event) {
      this.task.user = $event.target.value;
    },
    sendForm() {
      const { id } = this.task;

      if (id === null) {
        this.$store.dispatch("addTask", this.task);
      } else {
        this.$store.dispatch("updateTask", this.task);
      }
      this.closePopup();
    },
    deleteTask() {
      const { id } = this.task;
      this.$store.dispatch("deleteTask", id);
      this.closePopup();
    },
  },
  components: { TitlePopup },
};
</script>
<style scoped lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(88, 88, 88, 0.397);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
}
body.popupBody {
  overflow-x: scroll;
  overflow-y: scroll;
}
.popupBody {
  width: 802px;
  min-height: 600px;
  background: #fff;

  .container {
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .body {
    .date {
      display: flex;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        width: 40%;
        cursor: pointer;

        label {
          width: 50%;
          border: none;
        }

        input {
          outline: none;
          cursor: pointer;
        }
      }
    }

    .img {
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      label {
        display: block;
        margin-bottom: 10px;
        box-sizing: border-box;
        width: 200px;
        cursor: pointer;
      }

      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        cursor: pointer;
      }

      input {
        display: none;
      }
    }

    .task {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
