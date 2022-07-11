<template>
  <div class="flex items-center n-input">
    <div v-if="hasPrefix" class="n-input-prefix">
      {{ prefix }}
    </div>
    <input
      class="w-full border-t border-b outline-none text-gray-dark border-gray-light focus:border-gray-400"
      :class="{
        'border-l rounded-l': !hasPrefix,
        'border-r rounded-r': !hasSuffix,
      }"
      v-bind="{ ...$props, ...$attrs }"
      v-on="$listeners"
    />
    <div v-if="hasSuffix" class="n-input-suffix">
      {{ suffix }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NInput",
  inheritAttrs: false,
  props: {
    prefix: {
      type: String,
      default: null,
    },
    suffix: {
      type: String,
      default: null,
    },
  },
  computed: {
    hasPrefix() {
      return !!this.prefix;
    },
    hasSuffix() {
      return !!this.suffix;
    },
  },
};
</script>
