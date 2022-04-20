<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card class="card">
          <p class="card-heading">OPEN ($)</p>
          <p class="card-body">
            {{
              Number(stockDataLastDayInfo["1. open"]).toLocaleString("en-US")
            }}
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="card">
          <p class="card-heading">HIGH ($)</p>
          <p class="card-body">
            {{
              Number(stockDataLastDayInfo["2. high"]).toLocaleString("en-US")
            }}
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="card">
          <p class="card-heading">LOW ($)</p>
          <p class="card-body">
            {{ Number(stockDataLastDayInfo["3. low"]).toLocaleString("en-US") }}
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="card">
          <p class="card-heading">CLOSE ($)</p>
          <p class="card-body">
            {{
              Number(stockDataLastDayInfo["4. close"]).toLocaleString("en-US")
            }}
          </p>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="card">
          <p class="card-heading">VOLUME ($)</p>
          <p class="card-body">
            {{
              Number(stockDataLastDayInfo["5. volume"]).toLocaleString("en-US")
            }}
          </p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CarsContainer",
  computed: {
    //Getting the last item of stockData array from Vuex to display it in our cards in this component
    stockDataLastDayInfo() {
      return this.$store.state.stockData[0][
        Object.keys(this.$store.state.stockData[0])
      ];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards-container {
  display: flex;
  column-gap: 5%;
}
.card {
  background-color: #000000;
  padding: 5%;
  color: #fff;
  margin: 2%;
  box-shadow: 0px 0px 5px 1px rgb(128, 128, 128);
}
.card-heading {
  margin-bottom: 2px;
  margin: 0;
}
.card-body {
  font-size: 100%;
  font-weight: 800;
  margin: 0;
}
</style>
