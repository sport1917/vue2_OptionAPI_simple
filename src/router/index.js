import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/",
    name: "toolbar",
    component: () => import("../views/Toolbar.vue"),

    children: [
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/me",
        name: "me",
        component: () => import("../views/Me.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
      {
        path: "/simple",
        name: "simple",
        component: () => import("../views/Simple.vue"),
      },
      {
        path: "/simplefor",
        name: "simplefor",
        component: () => import("../views/SimpleFor.vue"),
      },
      {
        path: "/grade",
        name: "grade",
        component: () => import("../views/Grade.vue"),
      },
      {
        path: "/apicon",
        name: "apicon",
        component: () => import("../views/Apicon.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
