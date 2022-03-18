<template>
  <div>
    <b-container>
      <div class="text">
        <h1>Get in Touch</h1>
        <br />
        <h5>
          If you have questions or want to give feedback fill out the form
          below.
        </h5>
        <h5>We will do our best to answer as soon as possible!</h5>
      </div>
      <b-card class="text-center" bg-variant="secondary">
        <b-col sm="10">
          <b-row class="my-4" v-for="params in contactParams" :key="params">
            <b-col sm="2">
              <label :for="`params-${params}`">{{ params }}</label>
            </b-col>
            <b-col sm="8">
              <b-form-input :id="`params-${params}`"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-4">
            <b-col sm="2">
              <label for="">Message:</label>
            </b-col>
            <b-col sm="8">
              <b-form-textarea
                id="textarea"
                v-model="text"
                rows="6"
                max-rows="12"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="10">
              <b-button class="btn float-right" type="submit" variant="dark"
                >Submit</b-button
              >
            </b-col>
          </b-row>
        </b-col>
      </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //  make contactparams into objects, makenew data strings with said values then change binder on component
      contactParams: ["Email:", "Subject:"],
    };
  },
};
</script>
<style scoped>
.text {
  margin: 5%;
}
.contact-body {
  text-align: center;
}
</style>
