<template>
  <el-header class="header-container" height="65px">
    <el-button class="header-collapse" type="text" :icon="collapseIcon" @click="collapseEvent"></el-button>
    <h2 class="header-title">Demo Application</h2>
    <el-button class="sign-out" @click="signOut">Sign Out</el-button>
  </el-header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',
  methods: {
    collapseEvent () {
      this.$store.commit('setCollapse', !this.isCollapse)
    },
    signOut () {
      (document.activeElement as HTMLElement).blur()
      this.$store.commit('setAuthenticated', false)
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    isCollapse () {
      return this.$store.getters.isCollapse
    },
    collapseIcon (): string {
      return this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  }
})
</script>

<style scoped>
.header-container {
  padding: 0;
  border-bottom: solid 1px #e6e6e6;
  display: grid;
  grid-template:
    "collapse . title . sign-out ." auto
    / 65px 10px 210px 1fr auto 20px;
}
.header-collapse {
  grid-area: collapse;
  padding: 0px;
  color: #606266;
  font-size: 21px;
}
.header-title {
  grid-area: title;
  align-self: center;
  justify-self: center;
  margin: 0;
}
.sign-out {
  grid-area: sign-out;
  align-self: center;
}
</style>
