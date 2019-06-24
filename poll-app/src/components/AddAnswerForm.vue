<template>
  <form v-on:submit.prevent="answerSubmit(pollAnswer)" class action="#" method="post">
    <input
      v-model="pollAnswer"
      type="text"
      name="title"
      value
      placeholder="Answer"
    >
    <button type="submit" name="button">Add Answer</button>
  </form>
</template>

<script>
export default {
  name: "AddAnswerForm",
  data() {
    return {
      pollAnswer: ""
    };
  },
  methods: {
    answerSubmit(pollAnswer) {
      this.$emit("addAnswer", pollAnswer);
      this.$data.pollAnswer = " ";
    }
  }
};
</script>

<style>
</style>
