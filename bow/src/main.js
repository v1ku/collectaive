import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // Add this line

new Vue({
  vuetify, // Add this line
  render: (h) => h(App),
}).$mount("#app");
