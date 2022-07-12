<template>
  <overlay-scrollbars v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <!-- Pass on all named slots -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />

    <!-- Pass on all scoped slots -->
    <template
      v-for="slot in Object.keys($scopedSlots)"
      :slot="slot"
      slot-scope="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </overlay-scrollbars>
</template>

<script>
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

export default {
  name: "NOverlayScrollbar",
  components: {
    OverlayScrollbars: OverlayScrollbarsComponent,
  },
};
</script>

<style lang="postcss" scoped>
@import "overlayscrollbars/css/OverlayScrollbars.css";
</style>
