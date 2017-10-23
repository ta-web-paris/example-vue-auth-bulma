import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

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
      beforeEnter: (to, from, next) => {
        if (router.app.$root.user) next('/');
        else next();
      },
    },
    {
      path: '/signup',
      component: Signup,
    },
  ],
});

export default router;
