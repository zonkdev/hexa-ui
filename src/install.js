import NInput from "@/components/ui/Input.vue";
import NButton from "@/components/ui/Button.vue";
import NFormAction from "@/components/form/Action.vue";

const HexaUi = {
  install(Vue) {
    Vue.component("NInput", NInput);
    Vue.component("NButton", NButton);
    Vue.component("NFormAction", NFormAction);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HexaUi);
}

export default HexaUi;
