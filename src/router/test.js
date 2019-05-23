export default {
  name: '测试',
  path: '/hello',
  icon: 'iconxiaoxi',
  redirect: '/hello',
  component: () => import( /* webpackChunkName: "module-popularize" */ '@/components/popularize/HelloWorld.vue'),
}