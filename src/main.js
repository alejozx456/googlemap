import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCg_7LHHbgxkMn3cOjl4maxfA7rT3RKUbo",
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
