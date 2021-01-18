<template>
  <el-date-picker
    style="width: 200px;"
    :value="$props.value"
    @input="$emit('input', $event)"
    :disabled="$props.disabled"
    placeholder="1990-01-01"
    type="date"
    format="yyyy-MM-dd"
    default-value="1990-01-01"
    value-format="yyyy-MM-dd"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BirthDayPicker',
  props: {
    value: String,
    disabled: Boolean
  }
})
</script>

<style scoped>
</style>
