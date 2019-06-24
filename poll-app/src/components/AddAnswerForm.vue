<template>
    <div id="answerForm">
      <input id="answerField" type="text" name="title" placeholder="Answer">
      <button @click="appendAnswer(index)" name="change-button"> Change </button>
      <button @click.prevent="deleteAnswer(index)" name="del-button" > Delete </button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddAnswerForm",
  methods: {
    ...mapActions([
      'appendAnswer',
      'deleteAnswer'
    ])
  }
};
</script>

<style>
#answerForm {
  margin: 5px;
}
</style>
