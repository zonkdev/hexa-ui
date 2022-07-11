<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HButton>Example</HButton>
    <HInput />
  </div>
</template>

<script>
import HButton from "./components/HButton.vue";
import HInput from "./components/HInput.vue";

export default {
  name: "App",
  components: {
    HButton,
    HInput,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
