<template>
  <div>
    <HeaderIndex></HeaderIndex>
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
      <b-card class="contact-body" bg-variant="secondary">
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
              <b-button
                v-on:click="messageSent()"
                class="btn float-right"
                type="submit"
                variant="dark"
                >Submit</b-button
              >
            </b-col>
          </b-row>
        </b-col>
      </b-card>
    </b-container>
    <FooterIndex></FooterIndex>
  </div>
</template>
<script>
import router from "@/router";
import HeaderIndex from "../components/Header/header-index";
import FooterIndex from "../components/Header/footer-index";

export default {
  components: {
    HeaderIndex,
    FooterIndex,
  },
  data() {
    return {
      //  make contactparams into objects, makenew data strings with said values then change binder on component
      contactParams: ["Email:", "Subject:"],
    };
  },
  methods: {
    messageSent: function () {
      alert(
        "Your message has been sent. Our team will take a look and follow up with you as soon as possible. Thank you for your time!"
      );
      router.push("/home");
    },
  },
};
</script>
<style scoped>
.text {
  margin: 5%;
}
.contact-body {
  text-align: center;
  margin: 10%;
  margin-top: 5%;
}
</style>
