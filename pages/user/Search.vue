<template>
  <div class="container">
    <search-item class="search" @searchEvent="search"/>
    <el-button class="download" icon="el-icon-download">download</el-button>
    <search-table class="table" :user-infoes="userInfoes" />
    <el-pagination
      class="pagination"
      @current-change="handleCurrentChange"
      :page-size="PAGE_SIZE"
      :pager-count="PAGER_COUNT"
      layout="total, prev, pager, next"
      :total="totalCount"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchItem from '@/components/molecules/SearchItem.vue'
import SearchTable from '@/components/molecules/SearchTable.vue'
import config from '@/const/const.ts'
import { SearchCond } from '@/types'

export default Vue.extend({
  name: 'Search',
  layout: 'login',
  components: {
    SearchItem,
    SearchTable
  },
  data () {
    return {
      PAGE_SIZE: config.PAGE_SIZE,
      PAGER_COUNT: config.PAGER_COUNT,
      type: null,
      input: null,
      totalCount: 0,
      userInfoes: []
    }
  },
  methods: {
    search (cond: SearchCond) {
      this.userInfoes = this.$store.getters.getUserInfoes.slice(0, this.PAGE_SIZE)
      this.totalCount = this.$store.getters.getTotalCount
      this.$data.type = cond.type
      this.$data.input = cond.value
    },
    handleCurrentChange (page: number) {
      this.userInfoes = this.$store.getters.getUserInfoes.slice((page - 1) * this.PAGE_SIZE, page * this.PAGE_SIZE)
      window.scroll(0, 0)
    }
  }
})
</script>

<style scoped>
  .container {
    display: grid;
    grid-template:
      "search     .......... download  " auto
      ".......... .......... .........." 30px
      "table      table      table     " auto
      ".......... .......... .........." 20px
      "pagination pagination pagination" auto
      / minmax(auto, 600px) minmax(10px, 1fr) auto;
  }
  .search {
    grid-area: search;
  }
  .download {
    grid-area: download;
  }
  .table {
    grid-area: table;
  }
  .pagination {
    grid-area: pagination;
  }
</style>
