<template>
  <button-base>
    <el-button type="primary" plain @click="confirm">Confirm</el-button>
  </button-base>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonBase from '@/components/ButtonBase.vue'
import { actionType } from '~/enum/actionType'

export default Vue.extend({
  name: 'InputButton',
  components: {
    ButtonBase
  },
  methods: {
    confirm () {
      this.$emit('childEvent', actionType.confirm)
    }
  }
})
</script>

<style scoped>
</style>
