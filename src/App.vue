<template>
  <div id="app">
    <HeaderComponent class="header-component" />
    <AlertComponent v-if="alertStatus" />
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import AlertComponent from "./components/AlertComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    AlertComponent,
    Footer,
  },
  computed: {
    alertStatus() {
      return this.$store.state.alertStatus.status;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
