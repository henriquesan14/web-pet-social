import Vue from "vue";
import VueRouter from "vue-router";
import AuthLayout from "@/views/Auth/AuthLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: () => import( "../views/Auth/Login.vue")
      },
      {
        path: 'register',
        name: 'register',
        component: () => import( "../views/Auth/Register.vue")
      }
    ]
    
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
