import Vue from "vue";
import VueRouter from "vue-router";
import AuthLayout from "@/views/Auth/AuthLayout.vue";
import DashboardLayout from '../views/Dashboard/DashboardLayout.vue';
import { authGuard, noAuthGuard } from './guards/guards';

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
        beforeEnter: authGuard,
        component: () => import( "../views/Auth/Login.vue")
      },
      {
        path: 'register',
        name: 'register',
        beforeEnter: authGuard,
        component: () => import( "../views/Auth/Register.vue")
      }
    ]
    
  },
  {
    path: "/",
    name: "home",
    beforeEnter: noAuthGuard,
    component: DashboardLayout,
    children: [
      {
        path: 'timeline',
        name: 'timeline',
        component: () => import('../views/Dashboard/Timeline/Timeline.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/Dashboard/Profile/Profile.vue')
      },
      {
        path: 'updatepassword',
        name: 'update-password',
        component: () => import('../views/Dashboard/UpdatePassword/UpdatePassword.vue')
      },
      {
        path: 'pet/:id',
        name: 'profile-pet',
        props: true,
        component: () => import('../views/Dashboard/ProfilePet/ProfilePet.vue')
      },
      {
        path: 'amizades',
        name: 'amizades',
        component: () => import('../views/Dashboard/Amizades/Amizades.vue')
      },
      {
        path: 'chat',
        name: 'chat',
        component: () => import('../views/Dashboard/Chat/Chat.vue')
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
