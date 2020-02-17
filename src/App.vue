<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/IMG-9545.png" class="logo">
    <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    
    TodoList,
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

.container{
  max-width: 600px;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
.logo{
  display: block;
  margin: 20px auto;
  height: 200px;
  border-radius: 5%;
}
</style>
