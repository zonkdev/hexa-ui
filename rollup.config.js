import vue from "rollup-plugin-vue2";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";

import packageJson from "./package.json";

const globals = {
  vuedraggable: "vuedraggable",
  "vue-upload-component": "vue-upload-component",
  "fuse.js": "fuse.js",
  "vue-select/dist/vue-select.css": "v-select.css",
  "vue-select": "v-select",
  "vue-js-toggle-button": "vue-js-toggle-button",
  "vue-tailwind": "vue-tailwind",
  "vue-tailwind/dist/components": "vue-tailwind-components",
  "vue-currency-input": "vue-currency-input",
  "@johmun/vue-tags-input": "vue-tags-input",
  overlayscrollbars: "overlayscrollbars",
  "overlayscrollbars/css/OverlayScrollbars.css": "overlayscrollbars.css",
  vue: "Vue",
};

const postcssPlugins = [
  require("tailwindcss/nesting"),
  require("postcss-simple-vars"),
  require("postcss-import"),
  require("tailwindcss"),
  require("autoprefixer"),
];

const vueConfig = {
  preprocessStyles: true,
  defaultLang: {
    style: "postcss",
  },
  css: false,
  needMap: false,
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
};

const config = [
  {
    input: "src/assets/css/main.pcss",
    output: {
      sourcemap: true,
      dir: "dist",
    },
    plugins: [
      postcss({
        extract: "style.css",
        plugins: postcssPlugins,
        config: { path: "postcss.config.js" },
      }),
    ],
  },
  {
    input: "src/index.js",
    output: [
      {
        sourcemap: true,
        format: "cjs",
        file: packageJson.main,
        name: "hexa-ui",
        exports: "named",
        globals,
      },
      {
        sourcemap: true,
        format: "esm",
        file: packageJson.module,
        name: "hexa-ui",
        exports: "named",
        globals,
      },
    ],
    // output: {
    //   sourcemap: true,
    //   dir: "dist",
    //   entryFileNames: "index.js",
    //   format: "umd",
    //   name: "hexa-ui",
    //   exports: "named",
    //   globals,
    // },
    external: Object.keys(globals),
    plugins: [
      json(),
      alias({
        entries: [{ find: "@", replacement: __dirname + "/src" }],
      }),
      postcss({
        config: { path: "postcss.config.js" },
        plugins: postcssPlugins,
      }),
      vue(vueConfig),
    ],
  },
  // {
  //   input: "src/components.js",
  //   external: Object.keys(globals),
  //   output: {
  //     sourcemap: true,
  //     dir: "dist",
  //     entryFileNames: "components.js",
  //     format: "umd",
  //     name: "hexa-ui",
  //     exports: "named",
  //     globals,
  //   },

  //   plugins: [
  //     vue(vueConfig),
  //     postcss({
  //       plugins: postcssPlugins,
  //     }),
  //   ],
  // },
];

// const components = {
//   "n-overlay-scrollbar": "NScrollbar",
//   "n-button": "NButton",
//   "n-input": "NInput",
// };

// const componentsConfig = Object.keys(components)
//   .map((component) => {
//     const componentName = components[component];

//     return {
//       input: `src/components/${componentName}.vue`,
//       external: Object.keys(globals),
//       output: {
//         sourcemap: true,
//         dir: "dist/components",
//         entryFileNames: `${componentName}.js`,
//         format: "umd",
//         name: componentName,
//         exports: "named",
//         globals,
//       },
//       plugins: [
//         vue(vueConfig),
//         postcss({
//           plugins: postcssPlugins,
//         }),
//       ],
//     };
//   })
//   .flat();

export default config.concat([]);
