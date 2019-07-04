<template>
  <div id="changeAnswerForm">
    <input id="answerField" v-model="changeAnswer" type="text" name="title" placeholder="Answer">
    <button id="change-btn" @click="appendAnswer(changeAnswer)" name="change-button">Change</button>
    <button id="del-btn" @click.prevent="deleteAnswer(index)" name="del-button">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddAnswerForm",
  data() {
    return {
      changeAnswer: null
    };
  },
  methods: {
    ...mapActions(["appendAnswer", "deleteAnswer"])
  }
};
</script>

<style>
#answerField {
  width: 90%;
}
#changeAnswerForm {
  margin: 5px;
}

#change-btn,
#del-btn {
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

#change-btn:hover,
#del-btn:hover {
  background: #ac93d9;
}

#change-btn:active,
#del-btn:active {
  background: #ac93d9;
  text-decoration: none;
  box-shadow: 0 0px #666;
  transform: translateY(2px);
}
</style>
