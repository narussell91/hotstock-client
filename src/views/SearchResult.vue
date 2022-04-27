<template>
  <div>
    <HeaderIndex></HeaderIndex>
    <main class="main" v-if="stockData">
      <b-row>
        <b-col>
          <h1 class="title">
            {{ searchInput }} Market Session {{ timeSeriesName }}
          </h1>
        </b-col>
        <b-col>
          <b-button class="help-button" size="md" v-on:click="help()">
            <b-icon
              icon="question-circle-fill"
              aria-label="Help"
              size="lg"
            ></b-icon>
          </b-button>
        </b-col>
      </b-row>
      <CandlestickChart class="chart" />
      <CardsContainer />
    </main>
    <FooterIndex></FooterIndex>
  </div>
</template>

<script>
import HeaderIndex from "../components/Header/header-index";
import FooterIndex from "../components/Header/footer-index";
import CardsContainer from "../components/CardsContainer.vue";
import CandlestickChart from "../components/CandlestickChart.vue";
export default {
  name: "SearchResult",
  components: {
    HeaderIndex,
    FooterIndex,
    CardsContainer,
    CandlestickChart,
  },
  methods: {
    help: function () {
      alert(
        "Pick an inteval to show data within that range. Then hover over candle stick points int the grap to show specific interval data!"
      );
    },
  },
  computed: {
    searchInput() {
      return this.$store.state.searchInput;
    },
    stockData() {
      return this.$store.state.stockData;
    },
    timeSeriesName() {
      return this.$store.getters.timeSeriesName;
    },
  },
  watch: {
    //Whenever searchInput data in Vuex changes we fetch the data again for new searchInput
    searchInput() {
      this.$store.dispatch("fetchStockData");
    },
  },
  created() {
    //Fetch data when this component is created and add searchInput into localStorage for using in page refresh
    if (this.searchInput === "")
      this.$store.commit(
        "SET_SEARCH_INPUT",
        localStorage.getItem("searchInput")
      );
    this.$store.dispatch("fetchStockData");
  },
};
</script>

<style scoped>
.main {
  padding: 30px 70px 70px;
}
.title {
  margin: 2%;
  font-size: 18px;
  font-weight: 600;
  color: rgb(97, 97, 97);
}
.cards-container {
  margin: 2%;
}
.chart {
  box-shadow: 0px 0px 5px 1px rgb(128, 128, 128);
}
.help-button {
  margin-bottom: 5%;
}
</style>
