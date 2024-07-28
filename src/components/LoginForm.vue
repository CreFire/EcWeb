<template>
    <form @submit.prevent="login">
      <div>
        <label for="username">用户名:</label>
        <input id="username" v-model="username" type="text" required>
        <p v-if="!username && submitted">用户名是必填项</p>
      </div>
      <div>
        <label for="password">密码:</label>
        <input id="password" v-model="password" type="password" required>
        <p v-if="!password && submitted">密码是必填项</p>
      </div>
      <div>
        <a href="/forgot-password">忘记密码?</a>
      </div>
      <button type="submit">登录</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        submitted: false
      };
    },
    methods: {
      login() {
        this.submitted = true; // 设置表单已提交的标志
        if (this.username && this.password) {
          console.log('登录:', this.username, this.password);
          this.$router.push('/admin')
          // 进行登录操作，例如API调用
        }
      }
    }
  }
  </script>
  