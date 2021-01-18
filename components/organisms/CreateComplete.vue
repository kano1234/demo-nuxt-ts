<template>
  <div class="complete-area">
    <el-alert
      title="User creation is complete!!"
      type="success"
      description="You can check the created contents on the search screen."
      center
      show-icon
      :closable="false"
    />
    <complete-button @childEvent="buttonAction"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CompleteButton from '@/components/molecules/CompleteButton.vue'

export default Vue.extend({
  components: { CompleteButton },
  name: 'CreateComplete',
  methods: {
    buttonAction (action: string) {
      switch (action) {
        case 'top':
          this.$emit('childEvent', action)
          break
        case 'search':
          this.$router.push({ name: 'user-Search' })
          break
        default:
          break
      }
    }
  }
})
</script>

<style scoped>
  .complete-area {
    width: 700px;
  }
  .el-alert {
    padding: 50px 20px;
  }
</style>
