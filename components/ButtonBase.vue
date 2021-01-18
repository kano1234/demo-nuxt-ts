<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonBase'
})
</script>

<style scoped>
  .container {
    text-align: center;
    margin-top: 30px;
  }
  .el-button {
    width: 111px;
  }
</style>
