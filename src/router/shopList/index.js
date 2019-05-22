export default {
  path: '/',
  redirect: '/home',
  component: () => import('../../layouts/index.vue'),
  children: [{
    path: '/home',
    name: '增加商品',
    component: () => import(/* webpackChunkName: "module-lists" */ '../../components/shopList/home.vue'),
  }, {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "module-lists" */ '../../components/shopList/test.vue'),
  }],
};
