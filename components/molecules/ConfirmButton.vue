<template>
  <button-base>
    <el-button plain @click="back">Back</el-button>
    <el-button type="primary" plain @click="create">Create</el-button>
  </button-base>
</template>

<script lang="ts">
import Vue from 'vue'

import ButtonBase from '@/components/ButtonBase.vue'

export default Vue.extend({
  name: 'ConfirmButton',
  components: {
    ButtonBase
  },
  methods: {
    create () {
      this.$emit('childEvent', 'create')
    },
    back () {
      this.$emit('childEvent', 'back')
    }
  }
})
</script>

<style scoped>
</style>
