export default {
  name: '店铺推广',
  path: '/popularize',
  icon: 'iconshare',
  redirect: '/popularize/survey',
  component: () => import('@/layouts/index.vue'),
  children: [{
    name: '推广概括',
    path: '/popularize/survey',
    component: () => import( /* webpackChunkName: "module-popularize" */ '@/components/popularize/survey.vue'),
  }]
}