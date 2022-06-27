<template>
  <div id="app">
    <router-view>
      <LoginView></LoginView>
      <RegisterView></RegisterView>
      <DetailsViewVue></DetailsViewVue>
    </router-view>
  </div>
</template>

<script>
import DetailsViewVue from './components/DetailsView.vue'
import LoginView from './components/LoginView.vue'
import RegisterView from './components/RegisterView.vue'
export default {
  name: 'App',
  components: {
    LoginView,
    RegisterView,
    DetailsViewVue
  }
}
</script>

<style>
#app {
  width: 100%;
}
</style>
