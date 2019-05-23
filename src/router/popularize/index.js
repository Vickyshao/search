export default {
  path: '/popularize',
  name: '店铺推广',
  template: '<router-view></router-view>',
  children: [{
    path: '/survey',
    name: '推广概括',
    component: () => import( /* webpackChunkName: "module-popularize" */ '@/components/popularize/survey.vue'),
  }, {
    path: '/HelloWorld',
    name: 'hello',
    component: () => import( /* webpackChunkName: "module-popularize" */ '@/components/popularize/HelloWorld.vue'),
  }]

}