<template>
  <div
    id="app"
    class="h-screen antialiased leading-none md:flex md:flex-cols md:items-center md:justify-center bg-gray-100"
  >
    <div class="pb-36 max-w-md mx-auto my-10">
      <div class="flex gap-4 mb-4">
        <NButton>Example</NButton>
        <NButton class="primary">Example</NButton>
        <NButton class="secondary">Example</NButton>
        <NButton class="success">Example</NButton>
        <NButton class="info">Example</NButton>
        <NButton class="danger">Example</NButton>
        <NButton class="outline">Example</NButton>
      </div>

      <div class="flex gap-4 mb-4">
        <NButton class="lg">Example</NButton>
        <NButton class="md">Example</NButton>
        <NButton class="sm">Example</NButton>
      </div>

      <div class="flex flex-col gap-y-2 mb-4">
        <NInput placeholder="Input" />
        <NInput prefix="Prefix" placeholder="Input" />
        <NInput suffix="Suffix" placeholder="Input" />
      </div>

      <div class="flex flex-col gap-y-2 mb-4">
        <NForm>
          <NFormSection>
            <NInputGroup label="Input">
              <NInput placeholder="input ..." />
            </NInputGroup>

            <NInputGroup label="Input">
              <NInput type="number" placeholder="input ..." />
            </NInputGroup>
          </NFormSection>

          <NFormAction />
        </NForm>
      </div>

      <div class="flex flex-row gap-x-2 mb-4">
        <NIcon class="text-primary" />
        <NIcon class="text-secondary" />
        <NIcon class="text-danger" />
      </div>

      <div class="flex flex-row gap-x-2 mb-4">
        <NIcon class="xs" />
        <NIcon class="sm" />
        <NIcon class="md" />
        <NIcon class="lg" />
        <NIcon class="xl" />
        <NIcon class="xxl" />
      </div>

      <NFileUpload />
    </div>
  </div>
</template>

<script>
import NButton from "@/components/NButton.vue";
import NInput from "@/components/NInput.vue";
import NIcon from "@/components/NIcon.vue";
import NInputGroup from "@/components/NInputGroup.vue";
import NFileUpload from "@/components/NFileUpload.vue";
import NForm from "@/components/NForm/NForm.vue";
import NFormAction from "@/components/NForm/NFormAction.vue";
import NFormSection from "@/components/NForm/NFormSection.vue";

export default {
  name: "App",
  components: {
    NButton,
    NInput,
    NIcon,
    NInputGroup,
    NFileUpload,
    NForm,
    NFormAction,
    NFormSection,
  },
};
</script>
