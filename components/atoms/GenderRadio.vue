<template>
  <el-radio-group :value="$props.value" @input="$emit('input', $event)" :disabled="$props.disabled">
    <el-radio label="0">Male</el-radio>
    <el-radio label="1">Female</el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GenderRadio',
  props: {
    value: String,
    disabled: Boolean
  }
})
</script>

<style scoped>
</style>
