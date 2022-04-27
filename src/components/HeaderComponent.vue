<template>
  <header class="header">
    <router-link class="logo" :to="{ name: 'home' }" style="color: white"
      ><em>HOTSTOCK</em></router-link
    >
    <b-input
      @change="mutateSearchInputInVuex"
      v-model="searchInput"
      type="text"
      placeholder="Search Stock Symbol"
    />
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchInput: "",
      isAdmin: false,
    };
  },
  methods: {
    //Whenever the admin status changes, this function is invoked and mutates Vuex's "isAdmin" value
    mutateAdminStatusInVuex() {
      this.$store.commit("SET_ADMIN", this.isAdmin);
    },
    //Whenever the sarch input changes, this function is invoked and mutates Vuex's "searchInput" value
    mutateSearchInputInVuex() {
      if (
        this.searchInput !== "" &&
        this.searchInput !== this.$store.state.searchInput
      ) {
        this.$store.commit("SET_SEARCH_INPUT", this.searchInput);
        //Latest searchInput is saved in localStorage to be able to get the data again after a page refresh
        localStorage.setItem("searchInput", this.searchInput);
        this.goSearchResultView();
        this.searchInput = "";
      }
    },
    //Programmatic navigation for going SearchResult view when searchInput is changed
    goSearchResultView() {
      this.$router.push({
        name: "SearchResult",
        params: { symbol: this.searchInput },
      });
    },
  },
  //Calculates which type of use is active based on isAdmin value, if isAdmin is false; it is normal user, if isAdmin is true; it is Admin
  computed: {
    adminStatus() {
      return this.isAdmin === false ? "User" : "Admin";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 0 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 0, 0);
}
.logo {
  color: rgb(255, 255, 255);
  height: 80%;
  display: flex;
  align-items: center;
}
input {
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  width: 300px;
  height: 40px;
  padding-left: 50px;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 5px;
  outline: none;
}
.switch-container {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logs-route {
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  border: 1px solid grey;
  border-radius: 5px;
}
.logs-route:hover {
  background-color: rgb(231, 247, 247);
}
.user-switch {
  display: flex;
  align-items: center;
}
.user-status {
  width: 50px;
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
}
</style>
