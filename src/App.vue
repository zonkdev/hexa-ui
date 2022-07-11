<template>
  <div id="app">
 <div class="pb-36">
  <div class="max-w-md mx-auto my-10">

   <div class="flex gap-4 mb-4">
    <HButton>Example</HButton>
     <HButton class="primary">Example</HButton>
     <HButton class="secondary">Example</HButton>
     <HButton class="success">Example</HButton>
     <HButton class="info">Example</HButton>
     <HButton class="danger">Example</HButton>
     <HButton class="outline">Example</HButton>
    </div>

     <div class="flex gap-4">
    
    <HButton class="lg">Example</HButton>
    <HButton class="md">Example</HButton>
    <HButton class="sm">Example</HButton>
    </div>


    </div>


  </div>
  </div>
</template>

<script>
import HButton from "./components/HButton.vue";
// import HInput from "./components/HInput.vue";

export default {
  name: "App",
  components: {
    HButton,
    // HInput,
  },
};
</script>
