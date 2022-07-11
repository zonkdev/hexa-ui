<template>
  <button class="n-button" v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <span v-if="icon"><div :icon="icon" class="mr-1" /></span>
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: "NButton",
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: undefined,
    },
  },
};
</script>
