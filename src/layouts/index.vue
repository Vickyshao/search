<template>
  <div class="pages">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <aside-nav></aside-nav>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import '../assets/css/common.scss';
import '../assets/css/reset.scss';
import '../assets/css/view.scss';
import '../assets/css/iconFont/iconfont.css';
import '../assets/css/iconFont/iconfont';
import AppHeader from './header.vue';
import AsideNav from './asideNav.vue';

export default {
  components: {
    AppHeader,
    AsideNav,
  },
};
</script>
