import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { checkUser } from '@/api/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
      meta: {
        requiresNonAuth: true,
      },
    },
    {
      path: '/signup',
      component: Signup,
      meta: {
        requiresNonAuth: true,
      },
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    checkUser(router.app.$root);
    if (router.app.$root.user) next();
    else
      next({
        path: '/login',
        query: {
          redirect: encodeURIComponent(to.fullPath),
        },
      });
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresNonAuth) {
    checkUser(router.app.$root);
    if (router.app.$root.user) next('/');
    else next();
  } else {
    next();
  }
});

export default router;
