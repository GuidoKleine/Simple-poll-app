<template>
  <div class="answers-container">
    <h1>{{ poll }}</h1>
    <ul>
      <poll-item v-for="(option, index) in answers" :answer="option, index"></poll-item>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PollItem from "./PollItem";

export default {
  name: "AnswerSheet",
  components: {
    PollItem
  },
  computed: {
    ...mapGetters([
      'poll',
      'answers'
    ]
    )
  }
};
</script>

<style>
.answers-container {
  width: 33%;
  margin: 5px;
  border: solid 2px #9879d0;
  background-color: whitesmoke;
}
</style>
