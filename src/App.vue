<template>
  <div id="app">
    <nav-component></nav-component>
    <transition name="slide-fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import NavComponent from './components/common/NavComponent.vue'

export default {
  components: {
    NavComponent,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
