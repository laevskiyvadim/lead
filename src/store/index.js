import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
const token = localStorage.getItem("authToken");
if (token) axios.defaults.headers["Authorization"] = `Token ${token}`;
// axios.defaults.xsrfHeaderName = "x-csrftoken";
// axios.defaults.xsrfCookieName = "csrftoken";
import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      baseURL: "http://localhost:8000",
      token: localStorage.getItem("authToken") || null,
      links: [
        {
          id: 1,
          title: "Задачи",
          class: "icon-clients",
          items: [
            { id: 1, title: "Канбан", url: "/canban" },
            { id: 2, title: "Список", url: "/" },
          ],
        },
        // { id: 2, title: "Аналитика", class: "icon-analytics", url: "/analitycs" },
        // { id: 3, title: "Чаты", class: "icon-chat", url: "/chats" },
        // { id: 4, title: "Настройки", class: "icon-settings", url: "/settings" },
      ],
      currentUser: {},
      tasks: [],
      popup: {},
    };
  },
  mutations: {
    set_token(state, data) {
      localStorage.setItem("authToken", data);
      state.token = data;
    },
    delete_token(state) {
      localStorage.removeItem("authToken");
      state.token = null;
    },
    set_tasks(state, data) {
      state.tasks = data;
    },
    delete_task(state, data) {
      state.tasks = state.tasks.filter((element) => element.id != data);
    },
    set_currentUser(state, data) {
      state.currentUser = data[0];
    },
    set_popup(state, data) {
      state.popup = data;
    },
  },

  actions: {
    async login({ commit, state }, data) {
      const { baseURL } = state;
      await axios["post"](`${baseURL}/auth/token/login/`, data)
        .then((resp) => resp.data)
        .then((token) => {
          commit("set_token", token.auth_token);
          axios.defaults.headers["Authorization"] = `Token ${token.auth_token}`;
        });
    },
    // todo
    async registration({ state }, data) {
      const { baseURL } = state;
      await axios["post"](`${baseURL}/auth/users/`, data);
    },
    async logout({ commit, state }) {
      const { baseURL } = state;
      await axios.post(`${baseURL}/auth/token/logout/`).then(() => {
        commit("delete_token");
        delete axios.defaults.headers["Authorization"];
      });
    },
    async updateTask({ commit, state }, { id, ...data }) {
      const { baseURL } = state;
      await axios["put"](`${baseURL}/api/tasks/${id}/`, data)
        .then((response) => response.data)
        .then((data) => {
          commit("set_tasks", data);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    async addTask({ commit, state }, { id, ...data }) {
      id;
      const { baseURL } = state;
      const info = {
        user: state.currentUser.id,
        stageOfExecution: "Задачи",
        ...data,
      };
      await axios["post"](`${baseURL}/api/tasks/`, info)
        .then((response) => response.data)
        .then((tasks) => {
          commit("set_tasks", tasks);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    async getTasks({ commit, state }) {
      const { baseURL } = state;
      await axios["get"](`${baseURL}/api/tasks/`)
        .then((response) => response.data)
        .then((data) => {
          commit("set_currentUser", data.curUser);
          commit("set_tasks", data.tasks);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    async deleteTask({ commit, state }, id) {
      const { baseURL } = state;
      axios["delete"](`${baseURL}/api/tasks/${id}/`)
        .then((response) => {
          if (response.status === 204) {
            commit("delete_task", id);
          }
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
  },
});
