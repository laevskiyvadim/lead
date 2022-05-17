import { createRouter, createWebHistory } from "vue-router";

const isAuthorized = () => localStorage.getItem("authToken");

const authGuard = (to, from, next) => {
  !isAuthorized() ? next({ name: "Login" }) : next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: authGuard,
    component: () => import("../views/ClientList.vue"),
  },
  {
    path: "/canban",
    name: "Canban",
    beforeEnter: authGuard,
    component: () => import("../views/Canban.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/reg",
    name: "Registration",
    component: () => import("../views/Registration.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
