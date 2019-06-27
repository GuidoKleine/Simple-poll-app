<template>
  <div id="app">
    <div class="title-container">
      <h1>Pollynator</h1>
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
html,
body {
  height: 100%;
  background-color: #eeb200;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  width: 80%;
  height: 100%;
  margin: auto;
  margin-top: 60px;
}
.title-container {
  border: solid 2px #9879d0;
  background-color: whitesmoke;
}
.views-container {
  display: flex;
}
</style>
