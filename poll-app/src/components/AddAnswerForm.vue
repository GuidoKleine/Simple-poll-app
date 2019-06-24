<template>
  <div>
    <form v-on:submit.prevent="appendAnswer(pollAnswer)" class action="#" method="post">
      <input v-model="pollAnswer" type="text" name="title" value placeholder="Answer">
      <button type="submit" name="button">Add Answer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddAnswerForm",
  // submits new answer to store
  methods: {
    appendAnswer(pollAnswer) {
      this.$store.dispatch("appendAnswer", pollAnswer);
    }
  }
};
</script>

<style>
</style>
