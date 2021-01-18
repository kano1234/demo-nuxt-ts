<template>
  <el-aside :width="collapseWidth">
    <el-menu :style="collapseLeft" :default-active="getActiveIndex" :collapse="isCollapse" router>
      <el-menu-item index="dashboard" :route="{name:'dashboard'}"><i class="el-icon-house"/><span slot="title">Dashboard</span></el-menu-item>
      <el-submenu index="user">
        <template slot="title"><i class="el-icon-user"></i><span slot="title">User</span></template>
        <el-menu-item index="user-Search" :route="{name:'user-Search'}"><i class="el-icon-search"/>Search</el-menu-item>
        <el-menu-item index="user-Create" :route="{name:'user-Create'}"><i class="el-icon-edit"/>Create</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheAside',
  computed: {
    getActiveIndex () {
      return this.$route.name
    },
    isCollapse () {
      return this.$store.getters.isCollapse
    },
    collapseWidth (): string {
      return this.isCollapse ? '65px' : '200px'
    },
    collapseLeft (): string {
      return this.isCollapse ? 'width: 65px;' : 'width: 200px;'
    }
  }
})
</script>

<style scoped>
  .el-aside {
    background-color: #eef1f6;
    border-right: solid 1px #e6e6e6;
    border-bottom: solid 1px #e6e6e6;
    transition: all .3s;
  }
  .el-menu {
    border: none;
    transition: all .3s;
  }
</style>
