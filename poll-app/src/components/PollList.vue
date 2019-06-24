<template>
  <div class="poll-container">
    <input type="text" name="title" v-model="title" placeholder="Title">
    <h2>{{ title }}</h2>
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
    AddAnswerForm,
  },
   data() {
    return {
      title: ""
    };
  },
  methods: {
    appendAnswer(pollAnswer) {
     // this.answers.push(pollAnswer);
    },
    resetForm() {
      this.$data.title = "";
      this.$data.answers = [];
    }
  },
    computed: {
    answers(){
      return this.$store.state.answers
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
