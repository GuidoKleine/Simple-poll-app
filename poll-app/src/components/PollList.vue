<template>
  <div class="poll-container">
    <input id="pollTitle" type="text" name="title" placeholder="Title">
    <button @click.prevent="appendPoll">Set Poll</button>
    <AddAnswerForm v-for="(option, index) in answers" :answer="option, index"></AddAnswerForm>
    <button @click.prevent="createAnswer" >Add answer</button>
    <button id="reset-btn" @click.prevent="resetForm">Reset</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import PollItem from "./PollItem";
import AddAnswerForm from "./AddAnswerForm";

export default {
  name: "PollList",
  components: {
    PollItem,
    AddAnswerForm
  },
  computed: {
    ...mapGetters([
      'answers'
    ])
  },
  methods: {
    ...mapActions([
      'appendPoll',
      'createAnswer',
      'resetForm'
    ])
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

#reset-btn {
  margin: 5px;
  text-align: right;
}
</style>
