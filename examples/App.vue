<script setup>
import JkDemo2 from "../packages/JkDemo/src/jk-demo.vue";
</script>
<template>
  <JkDemo :msg="222"></JkDemo>
  <JkDemo2></JkDemo2>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
