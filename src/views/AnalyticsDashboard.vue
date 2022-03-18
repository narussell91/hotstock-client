<template>
  <div class="container-fluid">
    <div class="card p-2 rounded thick-shadow">
      <b-col class="date-picker">
        <b-form-input
          id="input-2"
          placeholder="Ticker or Stock Name"
          required
        ></b-form-input>
        <label for="example-datepicker">Choose a Start Date</label>
        <b-form-datepicker
          id="example-datepicker"
          class="mb-2"
        ></b-form-datepicker>
        <label for="example-datepicker">Choose a End Date</label>
        <b-form-datepicker
          id="example-datepicker"
          class="mb-2"
        ></b-form-datepicker>
      </b-col>
      <b-col>
        <b-row>
          <linechart></linechart>
        </b-row>
      </b-col>
    </div>
  </div>
</template>

<script>
import LineChart from "/Users/nate/Workspace/hotstock-client/src/components/line-chart.vue";
export default {
  components: {
    linechart: LineChart,
  },
};
</script>
<style scoped>
.thick-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card {
  display: center;
  padding: 2em;
  margin: 2em;
}
.date-picker {
  margin: 2em;
}
</style>
