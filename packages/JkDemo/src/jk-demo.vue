<script setup name="JkDemo">
const props = defineProps({
  msg: {
    type: String,
    default: "没有内容",
  },
});
</script>

<template>
  <div>{{ props.msg }}</div>
</template>

<style scoped></style>
