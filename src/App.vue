<template>
  <h1>Hello App!</h1>
  <main>
    <RouterView />
  </main>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <router-link to="/">Go to Home </router-link>
    <router-link to="/regist">Go to regist </router-link>
    <router-link to="/">主页 </router-link>
    <router-link to="/admin"> 管理员</router-link>
  </nav>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // LoginForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
