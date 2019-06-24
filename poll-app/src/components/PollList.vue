<template>
  <div class="poll-container">
    <input id="pollTitle" type="text" name="title" v-model="poll" placeholder="Title">
    <button v-on:click="appendPoll"></button>
    <h2>{{ pollTitle }}</h2>
    <ul>
      <poll-item v-for="answer in answers" :answer="answer"></poll-item>
    </ul>
    <AddAnswerForm @addAnswer="appendAnswer"></AddAnswerForm>
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
      let pollTitle = document.getElementById("pollTitle").value;
      this.$store.state.poll = pollTitle
    },
    // insert answer option into answers array in store
    appendAnswer(pollAnswer) {
      this.$store.state.answers.push(pollAnswer);
    },
    //resets the form
    resetForm() {
      this.$store.state.poll = "";
      this.$store.state.answers = [];
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
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 2px;
}

#reset-btn {
  margin: 5px;
  text-align: right;
}
</style>
