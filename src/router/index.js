import { createRouter, createWebHistory } from "vue-router";
import { Canban } from "../components/Canban";

import { ClientList } from "../components/ClientList";
import { Content } from "../views/Content";
import { Login } from "../views/Login";
import { Registration } from "../views/Registration";

const isAuthorized = () => localStorage.getItem("authToken");
const authGuard = (to, from, next) => {
  !isAuthorized() ? next({ name: "Login" }) : next();
};

const routes = [
  {
    path: "/",
    name: "Main",
    beforeEnter: authGuard,
    component: Content,
    children: [
      {
        path: "/list",
        name: "List",
        component: ClientList,
      },
      {
        path: "/canban",
        name: "Canban",
        component: Canban,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reg",
    name: "Registration",
    component: Registration,
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
