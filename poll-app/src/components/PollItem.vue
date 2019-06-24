<template>
  <li><input type="radio"> {{ $attrs.answer }} </li>
</template>

<script>
export default {
  name: "PollItem"
};
</script>

<style>
li {
  display: block;
  margin: 0 10px;
}
</style>
