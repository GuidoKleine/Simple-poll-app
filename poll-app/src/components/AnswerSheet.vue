<template>
  <div class="answers-container">
    <h1>{{ poll }}</h1>
    <ul>
      <li v-for="answer in answers" :answer="answer">{{ answer }}</li>
    </ul>
  </div>
</template>

<script>
import PollItem from "./PollItem";

export default {
  name: "AnswerSheet",
  components: {
    PollItem
  },
  computed: {
    // Get poll title from store
    poll() {
      return this.$store.state.poll;
    },
    // Get answers from store
    answers() {
      return this.$store.state.answers;
    }
  }
};
</script>

<style>
.answers-container {
  width: 33%;
  margin: 5px;
  border: solid 2px black;
}
</style>
