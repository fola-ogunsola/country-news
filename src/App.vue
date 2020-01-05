<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <list/> -->
    <!-- <formList/> -->
    <newList/>
  </div>
  
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
// import list from './components/list.vue'
// import formList from './components/formList.vue'
import newList from './components/newList.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    // list,
    // formList,
    newList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
