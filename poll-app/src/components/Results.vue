<template>
  <div class="result-container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      title: "total votes"
    };
  }
};
</script>

<style>
.result-container {
  width: 33%;
  margin: 5px;
  border: solid 2px #9879d0;
  background-color: whitesmoke
}
</style>
