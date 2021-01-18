<template>
  <el-main>
    <Nuxt />
  </el-main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheMain',
  middleware({ redirect }) {
    return redirect('/dashboard')
  }
})
</script>

<style scoped>
.el-main {
  padding: 40px;
}
</style>
