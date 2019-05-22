import Vue from 'vue';
import VueRouter from 'vue-router';

import shopList from './shopList';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
  //   {
  //   path: '/',
  //   redirect: '/login'
  // }, {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* webpackChunkName: "module-login" */ '@/components/login')
  // },
    shopList,
  ],
});
