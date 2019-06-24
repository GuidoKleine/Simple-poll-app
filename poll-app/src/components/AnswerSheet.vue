<template>
  <div class="answers-container">
    <h1>{{ title }}</h1>
    <ul>
      <poll-item v-for="answer in answers" :answer="answer"></poll-item>
    </ul>
  </div>
</template>

<script>
import PollItem from "./PollItem";

export default {
  name: "AnswerSheet",
  props: ['anwers'],
  components: {
    PollItem
    
    },
  data() {
    return {
      title: "Give your vote!",
      answers: []
    };
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
