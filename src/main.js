import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//libs
import './includes/bootstrap';
import './includes/vuelidate';
import './includes/loading';
import './includes/toasted';
import './includes/fontawesome';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
