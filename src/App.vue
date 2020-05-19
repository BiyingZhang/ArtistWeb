<template>
  <div id="app" class="full-page">
    <transition name="view" appear leave-active-class="animate__animated animate__flipOutX">
      <div v-if="$route.path == '/'" class="nav">
          <router-link to="/about"><font-awesome-icon :icon="['far', 'user']" size="lg" class="animate__animated animate__backInLeft animated__backOutRight"/></router-link>
          <br><br>
          <router-link to="/paintings"><font-awesome-icon icon="palette" size="lg" class="animate__animated animate__backInRight animated__backOutLeft"/></router-link>
          <br><br>
          <router-link to="/sculpture"><font-awesome-icon icon="dice-d20" size="lg" class="animate__animated animate__backInLeft animated__backOutRight"/></router-link>
          <br><br>
          <router-link to="/etching"><font-awesome-icon icon="fingerprint" size="lg" class="animate__animated animate__backInRight animated__backOutLeft"/></router-link>
        <!--<router-link to="/Contact">contact</router-link> -->
        <!-- <FullView pic="box1.jpg"/> -->
      </div>
    </transition>

    <!-- <transition  appear enter-active-class="animate__animated animate__backInUp delay" leave-active-class="animate__animated animate__backOutDown"> -->
    <!-- <transition  appear enter-active-class="animate__animated animate__backInUp delay"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <custom-cursor
      :targets="['img', 'a', 'button', 'your-hover-class']"
      :circleColor="'#fff'"
      :circleColorHover="'#2f2f2f'"
      :dotColor="'#2f2f2f'"
      :dotColorHover="'lightgray'"
      :hoverSize="1.8"
    ></custom-cursor>
  </div>
</template>

<script>
import CustomCursor from './components/CustomCursor.vue'

export default {
  name: 'Home',
  components: {
    CustomCursor
  }
}
</script>

<style>
* { cursor: none; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 0px;
  background-color: #01000E; 
  /* background-color: cadetblue; */
}

#app a{
  text-decoration: none;
}
#app a:visited {
    color: white;
}
.full-page {
  top: 0px;
  bottom: 0px;
  left: 0px;
  right:0px;
  position: absolute;
  overflow:  scroll;
}
#app::-webkit-scrollbar {
  display: none;
}
.nav {
  padding: 20px 20px;
  position: absolute;
  top: calc(50% - 90px); 
  left: calc(50% - 30px); 
}
.delay {
  animation-delay: 0.8s;
}
</style>
