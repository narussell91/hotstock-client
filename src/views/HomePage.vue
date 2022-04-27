<template>
  <div>
    <HeaderIndex></HeaderIndex>
    <div class="welcome-box home">
      <h1>Welcome to HOTSTOCK</h1>
      <br />
      <p>
        With HOTSTOCK users are able to look at the stock data of their choice!
        <br />
        Go to the our analytics dashboard and enter a stock name or ticker
        accompanied with a data range to view the relevant data
        <br />
        Take your financial future into your own hands with HOTSTOCK!
      </p>
    </div>
    <FooterIndex></FooterIndex>
  </div>
</template>

<script>
import HeaderIndex from "../components/Header/header-index";
import FooterIndex from "../components/Header/footer-index";

export default {
  components: {
    HeaderIndex,
    FooterIndex,
  },
};
</script>

<style>
.welcome-box {
  margin: 20%;
  text-align: center;
}
.home-component {
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 70px 70px;
  color: rgb(51, 51, 51);
}
</style>
