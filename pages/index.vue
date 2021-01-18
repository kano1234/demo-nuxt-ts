<template>
  <el-form :model="form">
    <el-avatar icon="el-icon-lock"></el-avatar>
    <h2 class="login-lable">ログイン</h2>
    <el-form-item>
      <el-input
        type="email"
        prefix-icon="el-icon-message"
        placeholder="Email"
        v-model="form.email"
      />
    </el-form-item>
    <el-form-item>
      <password-input v-model="form.password"/>
    </el-form-item>
    <el-button type="primary" plain @click="signIn">LOGIN</el-button>
    <div class="sign-up">
      <span>未入力でログインできます</span>
    </div>
  </el-form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'signin',
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    signIn () {
      this.$router.push({ name: 'dashboard' })
    }
  }
})
</script>

<style scoped>
.el-avatar {
  color: #c9cacf;
  background-color: white;
  border: 1px solid #c9cacf;
  margin-bottom: 10px;
}

.login-lable {
  display: block;
  margin-top: 0;
  margin-bottom: 30px;
}

.el-form {
  width: 400px;
  height: 400px;
  margin: 0 auto 0 auto;
  padding-top: 100px;
  text-align: center;
}

.el-input {
  width: 300px;
}

.el-button {
  width: 300px;
  margin-bottom: 30px;
}

.sign-up {
  display: block;
  width: 300px;
  margin: 0 auto;
}
</style>
