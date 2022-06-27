import VueRouter from "vue-router";
import Vue from "vue";

import login from "../components/LoginView.vue";
import register from "../components/RegisterView.vue";
import homeview from "@/components/HomeView";
import details from "../components/DetailsView.vue";
import upload from "../components/UploadView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: login,
  },
  {
    name: "register",
    path: "/register",
    component: register,
  },
  {
    name: "home",
    path: "/home",
    component: homeview,
  },
  {
    path: "/details",
    name: "details",
    component: details,
  },
  {
    path: "/upload",
    name: "upload",
    component: upload,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
