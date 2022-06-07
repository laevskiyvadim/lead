import axios from "axios";
import { createStore } from "vuex";

const api = axios.create({ baseURL: "http://localhost:8000" });

api.defaults.withCredentials = true;
api.defaults.crossDomain = true;
const token = localStorage.getItem("authToken");
if (token) api.defaults.headers["Authorization"] = `Token ${token}`;
api.defaults.xsrfHeaderName = "x-csrftoken";
api.defaults.xsrfCookieName = "csrftoken";

export const store = createStore({
  state() {
    return {
      token: localStorage.getItem("authToken") || null,
      links: [
        {
          id: 1,
          title: "Задачи",
          class: "icon-clients",
          items: [
            { id: 1, title: "Канбан", url: "/canban" },
            { id: 2, title: "Список", url: "/list" },
          ],
        },
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
      delete api.defaults.headers["Authorization"];
      const myDate = new Date();
      myDate.setTime(myDate.getTime() - 1);
      document.cookie = "csrftoken=; expires=" + myDate.toGMTString();
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
    async login({ commit }, data) {
      await api
        .post("/auth/token/login/", data)
        .then((resp) => resp.data)
        .then((token) => {
          commit("set_token", token.auth_token);
          api.defaults.headers["Authorization"] = `Token ${token.auth_token}`;
        });
    },

    async registration(ctx, data) {
      await api.post(`/auth/users/`, data);
    },

    async logout({ commit }) {
      await api.post(`/auth/token/logout/`, {}).then(() => {
        commit("delete_token");
      });
    },
    async getTasks({ commit }) {
      await api
        .get(`/api/tasks/`)
        .then((response) => response.data)
        .then((data) => {
          commit("set_tasks", data.tasks);
          commit("set_currentUser", data.curUser);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    async addTask({ commit, state }, { id, ...data }) {
      id;
      const info = {
        user: state.currentUser.id,
        stageOfExecution: "Задачи",
        ...data,
      };
      await api
        .post(`/api/tasks/`, info)
        .then((response) => response.data)
        .then((tasks) => {
          commit("set_tasks", tasks);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    async updateTask({ commit }, { id, ...data }) {
      await api
        .put(`/api/tasks/${id}/`, data)
        .then((response) => response.data)
        .then((data) => {
          commit("set_tasks", data);
        })
        .catch((e) => {
          console.log(e.response.status);
        });
    },
    async deleteTask({ commit }, id) {
      await api
        .delete(`/api/tasks/${id}/`)
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
