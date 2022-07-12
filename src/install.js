import NButton from "@/components/NButton.vue";
import NInput from "@/components/NInput.vue";
import NInputGroup from "@/components/NInputGroup.vue";
import NIcon from "@/components/NIcon.vue";
import NFormAction from "@/components/NForm/NFormAction.vue";
import NForm from "@/components/NForm/NForm.vue";
import NFormSection from "@/components/NForm/NFormSection.vue";
import NFormInput from "@/components/NForm/NFormInput.vue";

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
