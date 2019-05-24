export default {
  name:'商品管理',
  path: '/shopManage',
  icon: 'icontag',
  redirect: '/shopManage/addGoods',
  isMultiMenu: true,
  component: () => import('@/layouts/index.vue'),
  children: [{
    name: '增加商品',
    path: '/shopManage/addGoods',
    component: () => import( /* webpackChunkName: "module-shopManage" */ '@/components/shopList/addGoods.vue'),
  }, {
    name: '需求池管理',
    path: '/shopManage/demandsManage',
    component: () => import( /* webpackChunkName: "module-shopManage" */ '@/components/shopList/demandsManage.vue'),
  }, {
    name: '需求单列表',
    path: '/shopManage/demandsLists',
    component: () => import( /* webpackChunkName: "module-shopManage" */ '@/components/shopList/demandsLists.vue'),
  }],
};
