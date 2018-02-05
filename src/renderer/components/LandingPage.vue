<template>
  <div class="app-wrapper">
		<div class="sidebar-container">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" style="margin-top: 20px;" :collapse="false">
        <el-submenu index="1" :collapse="false">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">Excel操作</span>
          </template>
            <el-menu-item index="1-1">制作凭证</el-menu-item>
            <router-link to="/side/test">
              <el-menu-item index="1-2">测试页面</el-menu-item>
            </router-link>
            
            <router-link to="/side/evidence">
              <el-menu-item index="1-3">制作凭证2</el-menu-item>
            </router-link>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
    </div>
		<div class="main-container">
      <router-view></router-view>
			<!-- <app-main></app-main> -->
		</div>
	</div>
  
</template>

<script>
  // import AppMain from './AppMain'
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "..//styles//mixin.scss";
	.app-wrapper {
	  @include clearfix;
	  position: relative;
	  height: 100%;
	  width: 100%;
  }
  // 主体区域
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 180px;
  }
   .sidebar-container {
    transition: width 0.28s;
    width: 180px!important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    a {
      display: inline-block;
      width: 100%;
    }
    .svg-icon {
      margin-right: 16px;
    }
    .el-menu {
      border: none;
      width: 100%;
    }
  }
</style>
