import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import CS331 from './pages/CS331';
import CS351 from './pages/CS351';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name : 'home',
      path: '/',
      component: Home,
    },
    {
      name : 'CS331',
      path: '/CS331',
      component: CS331,
    },
    {
      name : 'CS351',
      path: '/CS351',
      component: CS351,
    },
  ]
});

export default router;