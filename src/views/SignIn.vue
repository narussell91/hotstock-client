<template>
  <div>
    <b-container>
      <div class="text">
        <h1>Sign In</h1>
      </div>
      <b-card class="text-center" bg-variant="secondary">
        <b-col>
          <b-row>
            <b-form @submit.stop.prevent>
              <label for="feedback-user">User ID</label>
              <b-form-input
                v-model="userId"
                :state="validation"
                id="feedback-user"
              ></b-form-input>
              <b-form-invalid-feedback :state="validation">
                Your user ID must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation">
                Looks Good.
              </b-form-valid-feedback>
            </b-form>
          </b-row>
          <b-row>
            <b-form @submit.stop.prevent>
              <label for="text-password">Password</label>
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
              ></b-form-input>
              <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </b-form-text>
            </b-form>
          </b-row>
          <b-row>
            <b-col>
              <b-button
                v-on:click="greeting"
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
  </div>
</template>
<script>
import router from "@/router";
export default {
  data() {
    return {
      //  make contactparams into objects, makenew data strings with said values then change binder on component
      contactParams: ["Email:", "Subject:"],
      userId: "",
    };
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
  },
  methods: {
    greeting: function () {
      alert(
        "Stock recommendations and comments presented on hotstock.com are solely those of the analysts and experts quoted. They do not represent the opinions of hotstock.com on whether to buy, sell or hold shares of a particular stock. Investors should be cautious about any and all stock recommendations and should consider the source of any advice on stock selection. Various factors, including personal or corporate ownership, may influence or factor into an expert's stock analysis or opinion. All investors are advised to conduct their own independent research into individual stocks before making a purchase decision. In addition, investors are advised that past stock performance is no guarantee of future price appreciation. By clicking OK you are  verifiying that you are over the age of 18"
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
}
</style>
