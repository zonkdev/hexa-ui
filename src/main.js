import Vue from "vue";
import App from "@/App.vue";

import "@/assets/css/main.pcss";

Vue.config.productionTip = false;

new Vue({ render: (createElement) => createElement(App) }).$mount("#app");
