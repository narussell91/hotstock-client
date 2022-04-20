<template>
  <v-footer class="footer">
    <router-link :to="{ name: 'contactUs' }">CONTACT US</router-link>
    <router-link :to="{ name: 'privacy' }">DATA PRIVACY</router-link>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
<style>
.footer {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
}
</style>
