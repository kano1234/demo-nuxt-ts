<template>
  <button-base>
    <el-button plain @click="top">Create Top</el-button>
    <el-button plain @click="search">Search</el-button>
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
    top () {
      this.$emit('childEvent', actionType.top)
    },
    search () {
      this.$emit('childEvent', actionType.search)
    }
  }
})
</script>

<style scoped>
</style>
