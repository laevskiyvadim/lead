import axios from "axios";
export default {
  state: {
    items: [
      {
        id: 1,
        tr: [
          { title: "26", body: "", class: "not-active" },
          { title: "27", body: "2222", class: "not-active" },
          { title: "28", body: "2222", class: "not-active" },
          { title: "29", body: "2222", class: "not-active" },
          { title: "30", body: "2222", class: "not-active" },
          { title: "31", body: "2222", class: "not-active" },
          { title: "1", body: "2222", class: "active" },
        ],
      },
      {
        id: 2,
        tr: [
          { title: "2", body: "", class: "task" },
          { title: "3", body: "2222", class: "" },
          { title: "4", body: "2222", class: "task" },
          { title: "5", body: "2222", class: "" },
          { title: "6", body: "2222", class: "task" },
          { title: "7", body: "2222", class: "" },
          { title: "8", class: "" },
        ],
      },
      {
        id: 3,
        tr: [
          { title: "9", body: "", class: "" },
          { title: "10", body: "2222", class: "task" },
          { title: "11", body: "2222", class: "" },
          { title: "12", body: "2222", class: "" },
          { title: "13", body: "2222", class: "task" },
          { title: "14", body: "2222", class: "task" },
          { title: "15", class: "" },
        ],
      },
      {
        id: 4,
        tr: [
          { title: "16", body: "", class: "" },
          { title: "17", body: "2222", class: "" },
          { title: "18", body: "2222", class: "" },
          { title: "19", body: "2222", class: "" },
          { title: "20", body: "2222", class: "task" },
          { title: "21", body: "2222", class: "task" },
          { title: "22", class: "task" },
        ],
      },
      {
        id: 5,
        tr: [
          { title: "23", body: "", class: "" },
          { title: "24", body: "2222", class: "" },
          { title: "25", body: "2222", class: "task" },
          { title: "26", body: "2222", class: "task" },
          { title: "27", body: "2222", class: "task" },
          { title: "28", body: "2222", class: "" },
          { title: "29", class: "" },
        ],
      },
      {
        id: 6,
        tr: [
          { title: "30", body: "", class: "task" },
          { title: "31", body: "2222", class: "task" },
          { title: "1", body: "2222", class: "not-active" },
          { title: "2", body: "2222", class: "not-active" },
          { title: "3", body: "2222", class: "not-active" },
          { title: "4", body: "2222", class: "not-active" },
          { title: "5", class: "not-active" },
        ],
      },
    ],
    clientItems: [
      {
        id: 1,
        srcIcon: "/assets/imgs/60x60.jpg",
        textTitle: "Заявка на строительство",
        clientName: "Федор", //Ответсвенный
        clientTask: "Перезвонить клиенту", //Задача
        taskTime: "Сегодня в 21:00", //Дата завершения
        clientMail: "highspeed@mail.com", //Email
        clientPhone: "+7-908-908-90-09", //телефон
        taskCost: "859 000", //Дата начала
        clientType: "Тёплый", //enum
        clientTypeIcon: "/assets/imgs/medium.svg",
        clientTypeClass: "medium",
      },
    ],
    cols: [
      {
        nameCol: "Первый этап",
        items: [
          {
            id: 1,
            type: "cold",
            time: "Сразу",
            title: "Заявка на строительство",
            name: "Андрей Иванович",
            pointer: [{ name: "АВ" }, { name: "РС" }, { name: "РС" }],
            contacts: [{ phone: "phone", mail: "mail" }],
          },
          {
            id: 2,
            type: "medium",
            time: "Завтра 22:30",
            title: "Заявка на строительство",
            name: "Андрей Иванович",
            pointer: [{ name: "АВ" }, { name: "РС" }, { name: "РС" }],
          },
        ],
      },
    ],

    currentTask: [],
    users: [],
  },
  mutations: {
    set_currentTask(state, data) {
      state.currentTask = data;
    },
    set_users(state, data) {
      state.users = data;
    },
  },
  actions: {
    getUsers({ commit }) {
      axios
        .get("http://127.0.0.1:8000/api/user/")
        .then((response) => response.data)
        .then((data) =>
          data.map((i) => {
            const { id, last_name, first_name, phone } = i;

            return {
              id,
              last_name,
              first_name,
              phone,
            };
          })
        )
        .then((data) => commit("set_users", data));
    },
  },
  getters: {
    clientList(state) {
      return state.tasks.map((x) => {
        const { StageOfExecution, ...item } = x;

        StageOfExecution;

        return item;
      });
    },
    calendar: (state) => (year, month) => {
      console.log(year, month);
      return state.items;
    },
  },
};
