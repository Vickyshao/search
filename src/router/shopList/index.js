export default {
  path: '/',
  redirect: '/shopManage/addGoods',
  component: () => import('@/layouts/index.vue'),
  children: [{
    path: '/shopManage/addGoods',
    name: '商品管理',
    component: () => import( /* webpackChunkName: "module-shopManage" */ '@/components/shopList/addGoods.vue'),
    // template: '<router-view></router-view>',
    // children: [{
    //   path: '/shopManage/addGoods',
    //   name: '增加商品',
    //   component: () => import( /* webpackChunkName: "module-shopManage" */ '@/components/shopList/addGoods.vue'),
    // }, {
    //   path: '/需求池管理',
    //   name: '增加商品',
    //   component: () => import( /* webpackChunkName: "module-shopManage" */ '@/components/shopList/demandsManage.vue'),
    // }, {
    //   path: '/需求单列表',
    //   name: '增加商品',
    //   component: () => import( /* webpackChunkName: "module-shopManage" */ '@/components/shopList/demandsLists.vue'),
    // }]
  }],
};
