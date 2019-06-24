<template>
  <li>{{ answer }}</li>
</template>

<script>
export default {
  name: "PollItem",
  props: ["answer"]
};
</script>

<style>
li {
  display: block;
  margin: 0 10px;
}
</style>
