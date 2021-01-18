<template>
  <el-input placeholder="ドロップダウンを選択すれば未入力で検索できます" v-model="$data.value">
    <el-select v-model="$data.type" slot="prepend" placeholder="Select">
      <el-option label="Tel" value="1"/>
      <el-option label="Name" value="2"/>
      <el-option label="ID" value="3"/>
    </el-select>
    <el-button slot="append" type="info" icon="el-icon-search" :disabled="isDisabled" @click="search"/>
  </el-input>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchItem',
  data () {
    return {
      type: '',
      value: ''
    }
  },
  methods: {
    search () {
      this.$emit('searchEvent', this.$data)
    }
  },
  computed: {
    isDisabled (): boolean {
      return this.type === ''
    }
  }
})
</script>

<style scoped>
  .el-select {
    width: 120px;
  }
</style>
