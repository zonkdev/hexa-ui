import NButton from "@/components/ui/Button.vue";
import NInput from "@/components/ui/Input.vue";
import NInputGroup from "@/components/ui/InputGroup.vue";
import NIcon from "@/components/ui/Icon.vue";
import NFormAction from "@/components/form/Action.vue";
import NForm from "@/components/form/Form.vue";
import NFormSection from "@/components/form/Section.vue";
import NFormInput from "@/components/form/Input.vue";

import "@/assets/js/vue-tailwind.js";

const HexaUi = {
  install(Vue) {
    Vue.component("NButton", NButton);
    Vue.component("NInput", NInput);
    Vue.component("NInputGroup", NInputGroup);
    Vue.component("NIcon", NIcon);
    Vue.component("NForm", NForm);
    Vue.component("NFormAction", NFormAction);
    Vue.component("NFormSection", NFormSection);
    Vue.component("NFormInput", NFormInput);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HexaUi);
}

export default HexaUi;
