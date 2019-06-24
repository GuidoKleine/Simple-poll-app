<template>
  <div id="app">
    <div class="title-container">
      <h1>Pollyynator</h1>
    </div>
    <div class="views-container">
      <poll-list></poll-list>
      <answer-sheet></answer-sheet>
      <results></results>
    </div>
  </div>
</template>

<script>
import PollList from "./components/PollList";
import AnswerSheet from "./components/AnswerSheet";
import Results from "./components/Results";

export default {
  name: "app",
  components: {
    PollList,
    AnswerSheet,
    Results
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  color: #2c3e50;
  margin-top: 60px;
  width: 900px;
  height: 640px;
}
.title-container {
  border: solid 2px black
}
.views-container {
  display: flex;
}
</style>
