<template>
  <div><WebPage /></div>
</template>

<script>
import WebPage from "./components/WebPage.vue";

export default {
  name: "App",
  components: {
    WebPage,
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
