<template>
  <div class="top">
    <el-card>
      <el-form label-position="left" label-width="180px" ref="formComponent" :model="$data.form" :rules="rules">
        <el-form-item label="User Name" prop="name">
          <el-input v-model="form.name" :placeholder="getPlaceholder('name')" :disabled="$data.disabled"></el-input>
        </el-form-item>
        <el-form-item label="Date of Birth" prop="dateOfBirth">
          <birth-day-picker v-model="form.dateOfBirth" :disabled="$data.disabled"/>
        </el-form-item>
        <el-form-item label="Email Address" prop="email">
          <el-input type="email" v-model="form.email" :placeholder="getPlaceholder('email')" :disabled="$data.disabled"></el-input>
        </el-form-item>
        <el-form-item label="Zip Code">
          <zip-form v-model="form.address.zip" @zipSearch="getAddress" :disabled="$data.disabled"/>
        </el-form-item>
        <el-form-item label="Prefecture">
          <el-input v-model="form.address.prefecture" :placeholder="getPlaceholder('prefecture')" :disabled="$data.disabled"></el-input>
        </el-form-item>
        <el-form-item label="City, Ward (Island)">
          <el-input v-model="form.address.city" :placeholder="getPlaceholder('city')" :disabled="$data.disabled"></el-input>
        </el-form-item>
        <el-form-item label="Rest of Address">
          <el-input v-model="form.address.restOfAddress" :placeholder="getPlaceholder('restOfAddress')" :disabled="$data.disabled"></el-input>
        </el-form-item>
        <el-form-item label="Telephone Number" prop="tel">
          <el-input class="input-short" v-model="form.tel" :placeholder="getPlaceholder('tel')" :disabled="$data.disabled"></el-input>
        </el-form-item>
        <el-form-item label="Gender">
          <gender-radio v-model="form.gender" :disabled="$data.disabled"/>
        </el-form-item>
      </el-form>
    </el-card>
    <component :is="$data.currentButton" @childEvent="buttonAction"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ElForm } from 'element-ui/types/form'
import InputButton from '@/components/molecules/InputButton.vue'
import ConfirmButton from '@/components/molecules/ConfirmButton.vue'
import ZipForm from '@/components/molecules/zipForm.vue'
import BirthDayPicker from '@/components/atoms/BirthDayPicker.vue'
import GenderRadio from '@/components/atoms/GenderRadio.vue'
import { ZipResponse } from '@/types'
import { ElMessageOptions } from 'element-ui/types/message'

interface StringKeyObject {
    [key: string]: any;
}

const PLACEHOLDERS: StringKeyObject = {
  name: 'スカイツリーカフェ340',
  prefecture: '東京都',
  city: '墨田区',
  restOfAddress: '押上1-1-2',
  tel: '0358097686',
  email: 'xxx@gmail.com'
}

export default Vue.extend({
  name: 'CreateInput',
  components: {
    InputButton,
    ConfirmButton,
    ZipForm,
    BirthDayPicker,
    GenderRadio
  },
  data () {
    return {
      currentButton: InputButton,
      disabled: false,
      form: {
        name: '',
        dateOfBirth: '',
        email: '',
        address: {
          zip: '',
          prefecture: '',
          city: '',
          restOfAddress: ''
        },
        tel: '',
        gender: ''
      },
      rules: {
        name: [{ required: true, trigger: 'blur' }],
        dateOfBirth: [{ required: true, trigger: 'blur' }],
        email: [{ required: true, type: 'email', trigger: 'blur' }],
        tel: [{ pattern: /^[0-9]+$/, message: '数値を入力してください。', trigger: 'blur' }]
      }
    }
  },
  methods: {
    getAddress (result: ZipResponse) {
      if (result.status === 200) {
        this.form.address.prefecture = result.prefecture
        this.form.address.city = result.city
        this.form.address.restOfAddress = result.restOfAddress
      } else {
        this.form.address.prefecture = ''
        this.form.address.city = ''
        this.form.address.restOfAddress = ''
        this.$message({
          showClose: true,
          message: result.message,
          type: result.status === 400 ? 'warning' : 'error',
          offset: 75
        } as ElMessageOptions)
      }
    },
    getPlaceholder (name: string) {
      return this.$data.disabled ? '' : PLACEHOLDERS[name]
    },
    buttonAction (action: string) {
      switch (action) {
        case 'confirm':
          (this.$refs.formComponent as ElForm).validate( valid => {
            if (valid) {
              this.$data.disabled = true
              this.$data.currentButton = ConfirmButton
              this.childEvent(action)
            }
          })
          break
        case 'back':
          this.$data.disabled = false
          this.$data.currentButton = InputButton
          this.childEvent(action)
          break
        case 'create':
          this.childEvent(action)
          break
        default:
          break
      }
      (document.activeElement as HTMLElement).blur()
      window.scroll(0, 0)
    },
    childEvent (name: string) {
      this.$emit('childEvent', name)
    }
  }
})
</script>

<style scoped>
  .top {
    width: 700px;
  }
  .el-form {
    width: 500px;
    margin: auto;
  }
  .input-short {
    width: 200px;
  }
</style>
