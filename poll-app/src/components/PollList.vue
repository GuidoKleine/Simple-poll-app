<template>
  <div class="poll-container">
    <input id="pollTitle" type="text" name="title" placeholder="Title">
    <button @click.prevent="appendPoll">Set Poll</button>
    <AddAnswerForm id="answerForm" v-for=""></AddAnswerForm>
    <button id="reset-btn" @click.prevent="resetForm">Reset</button>
  </div>
</template>

<script>
import PollItem from "./PollItem";
import AddAnswerForm from "./AddAnswerForm";

export default {
  name: "PollList",
  components: {
    PollItem,
    AddAnswerForm
  },
  methods: {
    // inserts poll title into poll propertie in store
    appendPoll() {
      this.$store.dispatch("appendPoll");
    },
    //resets the form
    resetForm() {
      this.$store.dispatch("resetForm")
    }
  },
  computed: {
    // returns the answers array
    answers() {
      return this.$store.state.answers;
    }
  }
};
</script>

<style>
.poll-container {
  text-align: center;
  width: 33%;
  margin: 5px;
  padding: 10px 0;
  border: solid 2px black;
}

#answerForm {
  margin: 5px;
}

#reset-btn {
  margin: 5px;
  text-align: right;
}
</style>
