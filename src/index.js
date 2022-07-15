import * as components from "./components.js";
const entries = Object.entries(components);

const HexaUi = {
  install(Vue) {
    entries.forEach(([componentName, component]) => {
      Vue.component(componentName, component);
    });
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HexaUi);
}

export default HexaUi;
