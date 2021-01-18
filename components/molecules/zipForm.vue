<template>
  <div>
    <zip-input :value="$props.value" @input="$emit('input', $event)" :disabled="$props.disabled"/>
    <el-button type="primary" @click="search" :disabled="isZipSearch">search</el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ZipInput from '@/components/atoms/ZipInput.vue'
import zipApi from '@/utils/zip.ts'
import { ZipResponse } from '@/types/index'

export default Vue.extend({
  name: 'ZipForm',
  components: {
    ZipInput
  },
  props: {
    value: String,
    disabled: Boolean
  },
  methods: {
    search () {
      zipApi.getZip(this.$props.value).then(response => {
        const result: ZipResponse = {
          status: response.data.status,
          message: response.data.message,
          prefecture: '',
          city: '',
          restOfAddress: ''
        }
        console.log(response.data.status)
        if (response.data.status === 200) {
          if (response.data.results !== null) {
            result.prefecture = response.data.results[0].address1
            result.city = response.data.results[0].address2
            result.restOfAddress = response.data.results[0].address3
          } else {
            result.status = 400
            result.message = '指定された郵便番号が存在しません。'
          }
        }
        this.$emit('zipSearch', result)
      })
    }
  },
  computed: {
    isZipSearch (): boolean {
      return this.value === '' || this.$props.disabled
    }
  }
})
</script>

<style scoped>
  .el-button {
    position: absolute;
    right: 0;
  }
</style>
