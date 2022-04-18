import Vue from "vue";
import Router from "vue-router";
import store from "/Users/nate/Workspace/hotstock-client/src/store/index.js";

import ContactUs from "../src/views/ContactUs.vue";
import SignIn from "../src/views/SignIn.vue";
import DataPrivacy from "../src/views/DataPrivacy.vue";
import DummyPage from "../src/views/DummyPage.vue";
import HomePage from "../src/views/HomePage.vue";

Vue.use(Router);

const routes = [
  { path: "/", name: "dummy", component: DummyPage },
  { path: "/home", name: "home", component: HomePage },
  { path: "/signin", name: "signin", component: SignIn },
  { path: "/contactus", name: "contactUs", component: ContactUs },
  { path: "/privacy", name: "privacy", component: DataPrivacy },
  {
    path: `/symbol/:symbol`,
    name: "SearchResult",
    component: () =>
      import(
        /* webpackChunkName: "search-result" */ "/Users/nate/Workspace/hotstock-client/src/views/SearchResult.vue"
      ),
  },
  {
    path: "/route-logs",
    name: "RouteLogs",
    component: () =>
      import(
        /* webpackChunkName: "search-result" */ "/Users/nate/Workspace/hotstock-client/src/views/RouteLogs.vue"
      ),
    // BeforeEnter Navigation Guard for RouteLogs Component to prevent unauthorized navigation attemp from normal users
    beforeEnter: (to, from, next) => {
      if (store.state.isAdmin) next();
      else {
        //When an unauthorized attempt occures, we set alarmStatus in Vuex to true for showing the AlertComponent.vue component
        store.commit("SET_ALERT_STATUS", {
          status: true,
          message:
            "You are not authorized to navigate this page. Please Sign in as Admin",
        });
        store.commit("SET_ROUTE_CHANGE_ARRAY", {
          warning: true,
          name: `Unauthorized Navigation Attempt - ${new Date().toLocaleString(
            "en-US"
          )}`,
          children: [
            { name: `From : ${from.fullPath}` },
            { name: `To : ${to.fullPath}` },
          ],
        });
        //This enables to stay on the same page when an unauthorized navigation attempt occures
        next({ path: from.fullPath });
      }
    },
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
