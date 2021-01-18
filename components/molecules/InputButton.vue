<template>
  <button-base>
    <el-button type="primary" plain @click="confirm">Confirm</el-button>
  </button-base>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonBase from '@/components/ButtonBase.vue'

export default Vue.extend({
  name: 'InputButton',
  components: {
    ButtonBase
  },
  methods: {
    confirm () {
      this.$emit('childEvent', 'confirm')
    }
  }
})
</script>

<style scoped>
</style>
