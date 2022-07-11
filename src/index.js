import HInput from "./components/HInput.vue";
import HButton from "./components/HButton.vue";

const HexaUi = {
  install(Vue) {
    Vue.component("HInput", HInput);
    Vue.component("HButton", HButton);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HexaUi);
}

export default HexaUi;
