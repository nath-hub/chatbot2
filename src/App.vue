<template>
  <div id="app">
    <Navbar v-if="isAuthenticated" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('token');
    }
  }
};
</script>

<style lang="css" scoped>

</style>
