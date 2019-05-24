export default {
  name: '测试',
  path: '/hello',
  icon: 'iconxiaoxi',
  redirect: '/hello',
  isMultiMenu: false,
  component: () => import('@/layouts/index.vue'),
  children: [{
    name: 'hello',
    path: '/hello',
    component: () => import( /* webpackChunkName: "module-popularize" */ '@/components/popularize/HelloWorld.vue'),
  }],
}