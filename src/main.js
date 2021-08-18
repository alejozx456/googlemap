import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import router from './router'

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCg_7LHHbgxkMn3cOjl4maxfA7rT3RKUbo",
  },
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
