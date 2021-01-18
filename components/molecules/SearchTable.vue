<template>
  <el-table :data="$props.userInfoes">
    <el-table-column prop="id" label="User ID" min-width="80"/>
    <el-table-column prop="name" label="Name" min-width="110"/>
    <el-table-column prop="zip" label="zip" min-width="110"/>
    <el-table-column prop="tel" label="Tel" min-width="110"/>
    <el-table-column prop="createAt" label="Date" min-width="110"/>
  </el-table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchTable',
  props: {
    userInfoes: {
      type: Array
    }
  }
})
</script>

<style scoped>
.el-link {
  font-weight: normal;
}
</style>
