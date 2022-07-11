import HInput from "./components/HInput.vue";
import HButton from "./components/HButton.vue";

const Components = {
  install(Vue) {
    Vue.component("HInput", HInput);
    Vue.component("HButton", HButton);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Components);
}

export default Components;
