<template>
  <div id="app">
    <AlertComponent v-if="alertStatus" />
    <router-view />
  </div>
</template>

<script>
import AlertComponent from "./components/AlertComponent.vue";

export default {
  name: "App",
  components: {
    AlertComponent,
  },
  computed: {
    alertStatus() {
      return this.$store.state.alertStatus.status;
    },
    signInStatus() {
      return this.$store.state.isSignedIn;
    },
  },
  watch: {
    //Whenever the route changes, we add route change information Object to routeChangeArray in Vuex
    $route(to, from) {
      let newRouteItem = {
        name: `Route Change - ${new Date().toLocaleString("en-US")}`,
        children: [
          { name: `From : ${from.fullPath}` },
          { name: `To : ${to.fullPath}` },
        ],
      };
      this.$store.commit("SET_ROUTE_CHANGE_ARRAY", newRouteItem);
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>
