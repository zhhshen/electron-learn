<template lang="html">
<div class="login-wrap">
  <div class="login-inner">
    <div class="login-title">
      登录
    </div>
    <div class="login-form">
      <ms-form-input-text label="用户名" v-model="userName"></ms-form-input-text>
      <ms-form-input-text label="密码" v-model="password" type="password"></ms-form-input-text>
    </div>
    <div class="ms-actions">
      <a class="ms-button ms-info login-btn" :disabled="lockLoginBtn" @click="loginAction">{{loginText}}</a>
    </div>
  </div>
</div>
</template>

<script>
import MsFormInputText from '@/components/Form/FormInputText'
import { loginByName } from '@/api/login'
export default {
  data () {
    return {
      userName: 'admin',
      password: '123123',
      loginText: '登录',
      lockLoginBtn: false
    }
  },
  methods: {
    loginAction () {
      this.lockLoginBtn = true
      this.loginText = '登录中...'
      let userName = this.userName
      let password = this.password
      let self = this
      self.$router.push({ path: 'home' })
      // loginByName(userName, password).then(function (res) {
      //   self.lockLoginBtn = false
      //   self.loginText = '登录'
      //   if (res.status === 200) {
      //     self.$router.push({ path: 'home' })
      //   }
      // }).catch(function (error) {
      //   self.lockLoginBtn = false
      //   self.loginText = '登录'
      // })
    }
  },
  components: {
    MsFormInputText
  }
}
</script>

<style lang="less">
.login-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ecf0f5;
  overflow: hidden;
}
.login-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 378px;
  padding: 32px 64px;
  text-align: left;
  background: #fff;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.12);
  transform: translate(-50%, -50%);
  .login-title {
    font-size: 16px;
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid transprent;
  }
}
.login-btn {
  width: 100%;
}
</style>
