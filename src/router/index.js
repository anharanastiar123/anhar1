import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Produk.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
