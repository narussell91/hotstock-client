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
      userId: "",
    };
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
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
