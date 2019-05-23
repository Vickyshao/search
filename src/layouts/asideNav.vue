<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- @open="handleOpen"
      @close="handleClose" -->
      <div :key="i" v-for="(nav, i) in $store.state.navTree">
        <el-submenu :index="i.toString()" v-if="nav.children && nav.children.length">
          <template slot="title">
            <i class="iconfont" :class="nav.icon"></i>
            <span>{{nav.name}}</span>
          </template>
          <el-menu-item :key="j" v-for="(child, j) in nav.children" @click="jumpTo(child)">
           {{child.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="i.toString()" v-if="!nav.children || !nav.children.length">
          <i  class="iconfont" :class="nav.icon"></i>
          <span slot="title" @click="jumpTo(nav)">{{nav.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    jumpTo(route) {
      this.$router.push({
        path: route.path,
      });
    },
  },
};
</script>
<style lang="scss">
.el-aside {
  .el-menu {
    width: 100%;
    height: 100%;
    .el-submenu__title {
      text-align: left !important;
    }
    .el-menu-item {
      text-align: left !important;
    }
  }
}
</style>
