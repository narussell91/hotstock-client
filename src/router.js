import Vue from "vue";
import Router from "vue-router";

import ContactUs from "../src/views/ContactUs.vue";
import AnalyticsDashboard from "../src/views/AnalyticsDashboard.vue";
import SignIn from "../src/views/SignIn.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", name: "signin", component: SignIn },
    { path: "/dasboard", name: "dashboard", component: AnalyticsDashboard },
    { path: "/contactus", name: "contactUs", component: ContactUs },
  ],
});

export default router;
