export default {
  name: '推广概况',
  path: '/popularize',
  icon: 'iconshare',
  redirect: '/popularize/accOverview',
  isMultiMenu: true,
  component: () => import('@/layouts/index.vue'),
  children: [{
    name: '账户总览',
    path: '/popularize/accOverview',
    component: () => import( /* webpackChunkName: "module-popularize" */ '@/components/popularize/accOverview.vue'),
  }]
}