<template>
  <TInputGroup
    class="n-input-group"
    :classes="classes"
    v-bind="{ ...$props, ...$attrs }"
    v-on="$listeners"
  >
    <slot></slot>
  </TInputGroup>
</template>

<script>
import TInputGroup from "vue-tailwind/dist/t-input-group";

export default {
  name: "NInputGroup",
  components: {
    TInputGroup: TInputGroup,
  },
  props: {
    validator: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      classes: {
        wrapper: "mb-1 md:mb-2",
        label: "text-gray-base uppercase label tracking-",
        body: "mt-1 pb-6",
        feedback: "n-input-group-feedback",
      },
    };
  },
};
</script>

<style lang="postcss" scoped>
.n-input-group {
  @apply relative;

  :deep() &-feedback {
    @apply absolute;
    @apply bottom-0;
    @apply text-xs;
    @apply text-danger;
    /* &::before {
      content: '\0000a0';
    }
    @apply pt-2;
    @apply text-xs;
    @apply text-danger; */
  }
}
</style>
