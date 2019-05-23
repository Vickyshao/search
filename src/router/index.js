import Vue from 'vue';
import VueRouter from 'vue-router';

import alias from './alias'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
    path: '*',
    redirect: '/shopManage/addGoods'
    },
    // , {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import(/* webpackChunkName: "module-login" */ '@/components/login')
    // },
    ...alias
  ],
});
