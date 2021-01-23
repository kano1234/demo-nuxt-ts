<template>
  <div class='container-create'>
    <el-steps class="steps" :active="$data.activeStep" :space="300" process-status="finish" finish-status="success" align-center>
      <el-step title="input"></el-step>
      <el-step title="confirm"></el-step>
      <el-step title="Done"></el-step>
    </el-steps>
    <component class="content" :is="$data.currentArea" @childEvent="switchAction"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InputArea from '@/components/organisms/CreateInput.vue'
import CompleteArea from '@/components/organisms/CreateComplete.vue'
import { actionType } from '~/enum/actionType'

export default Vue.extend({
  name: 'Create',
  layout: 'login',
  components: {
    InputArea,
    CompleteArea
  },
  data () {
    return {
      activeStep: 0,
      currentArea: InputArea
    }
  },
  methods: {
    switchAction (action: actionType) {
      switch (action) {
        case actionType.create:
          this.$data.activeStep = 3
          this.$data.currentArea = CompleteArea
          break
        case actionType.confirm:
          this.$data.activeStep = 1
          break
        case actionType.back:
        case actionType.top:
          this.$data.activeStep = 0
          this.$data.currentArea = InputArea
          break
        default:
          break
      }
      window.scroll(0, 0)
    }
  }
})
</script>

<style scoped>
  .container-create {
    display: grid;
    grid-template:
      ". steps   ." auto
      ". ....... ." 30px
      ". content ." auto
      ". ....... ." 30px
      / auto auto auto;
  }
  .steps {
    grid-area: steps;
  }
  .content {
    grid-area: content;
    justify-self: center;
  }
</style>
