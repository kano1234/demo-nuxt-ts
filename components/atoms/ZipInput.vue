<template>
  <el-input
    style="width: 200px;"
    :value="$props.value"
    @input="$emit('input', $event)"
    maxlength="7"
    :placeholder="$props.disabled ? '' : '1310045'"
    clearable
    :disabled="$props.disabled"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ZipInput',
  props: {
    value: String,
    disabled: Boolean
  }
})
</script>

<style scoped>
</style>
