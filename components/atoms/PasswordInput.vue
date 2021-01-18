<template>
  <el-input
    :value="$props.value"
    @input="$emit('input', $event)"
    minlength="8"
    placeholder="Password"
    show-password
    prefix-icon="el-icon-lock"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: String
  }
})
</script>

<style scoped>
</style>
