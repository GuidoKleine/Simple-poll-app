<template>
  <li><input type="radio"> {{ answers.answer }} </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PollItem",
  computed: {
    ...mapGetters(["answers"])
  }
};
</script>

<style>
li {
  display: block;
  margin: 0 10px;
}
</style>
