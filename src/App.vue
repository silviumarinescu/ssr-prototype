<template>
  <div class="container">
    <img src="./assets/logo.png">
    <Test-Component></Test-Component>
  </div>
</template>

<script>
import TestComponent from './TestComponent.vue';
import Vue from 'vue'
export default {
  components: {
    'Test-Component': TestComponent
  }
}
</script>

<style lang="scss">
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
      
    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
}

</style>
