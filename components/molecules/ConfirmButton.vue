<template>
  <button-base>
    <el-button plain @click="back">Back</el-button>
    <el-button type="primary" plain @click="create">Create</el-button>
  </button-base>
</template>

<script lang="ts">
import Vue from 'vue'

import ButtonBase from '@/components/ButtonBase.vue'
import { actionType } from '~/enum/actionType'

export default Vue.extend({
  name: 'ConfirmButton',
  components: {
    ButtonBase
  },
  methods: {
    create () {
      this.$emit('childEvent', actionType.create)
    },
    back () {
      this.$emit('childEvent', actionType.back)
    }
  }
})
</script>

<style scoped>
</style>
