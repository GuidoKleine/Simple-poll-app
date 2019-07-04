<template>
  <div class="answers-container">
    <h1>{{ poll }}</h1>
    <div class="answerSheet" v-for="answer in answers" :key="answer.id">
      <input type="radio"/> {{answer.answer}}
    </div>
    <button class="votebtn">Vote</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AnswerSheet",
  computed: {
    ...mapGetters(["poll", "answers"])
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

.answerSheet {
  margin: 2px;
}

.votebtn {
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
.votebtn:hover {
  background: #ac93d9;
}
.votebtn:active {
  background: #ac93d9;
  text-decoration: none;
  box-shadow: 0 0px #666;
  transform: translateY(2px);
}
</style>
