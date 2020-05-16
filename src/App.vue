<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-if="$route.path == '/'" class="nav">
      <router-link to="/about">About</router-link>
      <br>
      <router-link to="/paintings">Paintings</router-link>
      <br>
      <router-link to="/sculpture">Sculpture</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 0px;
  padding: 20px 20px;
  background-color: #01000E; 
  top: 0px;
  bottom: 0px;
  left: 0px;
  right:0px;
  position: absolute;
}
.nav{
  
}
</style>
