<template>
  <div class="poll-container">
    <input id="pollTitle" v-model="pollTitle" type="text" name="title" placeholder="Title" />
    <button id="poll-btn" @click.prevent="appendPoll(pollTitle)">Set Poll</button>
    <AddAnswerForm v-for="(answer) in answers" :key="answer.id"></AddAnswerForm>
    <div class="addAnswerForm">
      <input id="pollAnswer" v-model="pollAnswer" type="text" name="answer" placeholder="Answer" />
      <button id="add-btn" @click.prevent="createAnswer(pollAnswer)">Add answer</button>
      <button id="reset-btn" @click.prevent="resetForm">Reset</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import AddAnswerForm from "./AddAnswerForm";

export default {
  name: "PollList",
  data() {
    return {
      pollTitle: null,
      pollAnswer: null
    };
  },
  components: {
    AddAnswerForm
  },
  computed: {
    ...mapGetters(["answers"])
  },
  methods: {
    ...mapActions(["appendPoll", "createAnswer", "resetForm"])
  }
};
</script>

<style>
.poll-container {
  text-align: center;
  width: 33%;
  margin: 5px;
  padding: 10px 0;
  border: solid 2px #9879d0;
  background-color: whitesmoke;
}

.addAnswerForm {
  margin: 5px;
}

#pollTitle {
  width: 58%;
}

#pollAnswer {
  width: 90%;
}

#reset-btn,
#poll-btn,
#add-btn {
  margin: 5px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 1px 3px 0px #666666;
  color: #ffffff;
  background: #9879d0;
  padding: 5px 8px 5px 8px;
  text-decoration: none;
  border: none;
  outline: none;
}
#reset-btn:hover,
#poll-btn:hover,
#add-btn:hover {
  background: #ac93d9;
}
#reset-btn:active,
#poll-btn:active,
#add-btn:active {
  background: #ac93d9;
  text-decoration: none;
  box-shadow: 0 0px #666;
  transform: translateY(2px);
}
</style>
