<template>
    <div id="paintngs">
        <BackButton/>
        <h1>Paintings</h1>
        <div class="container">
            <Picture name="painting1" description='Chess Board, Oil on canvas, 24" x 24", 2018'/> 
            <Picture name="painting2" description='Drown, Oil on canvas, 24" x 24", 2018'/> 
            <Picture name="acrylic1" description='Stick Figure 1, Acrylic On Paper, 8" x 12", 2018'/> 
            <Picture name="acrylic2" description='Stick Figure 2, Acrylic On Paper, 8" x 12", 2018'/> 
            <Picture name="painting3" description='Odd Circuit, Oil on canvas, 18" x 24", 2018'/> 
            <Picture name="painting4" description='Wrap Me Up, Oil on canvas, tinsel foil fringe, 24" x 30", 2018'/> 
        </div>
    </div>
</template>

<script>
import BackButton from '../components/BackButton.vue'
import Picture from '../components/Picture.vue'
export default {
  name: 'Paintings',
  components: {
      BackButton, Picture
  }
}
</script>

<style scoped>
 img {
  max-width: 95%;
  max-height: 95%;
}
p{
    margin: 5px;
}
h1{
    text-align: left;
    margin-left: 5vw;
}
.delay {
  animation-delay: 0.8s;
}
.container{
    padding: 5vh 10vw;
    left:0;
    right:0;
    top: 0;
    bottom: 0;
    position: relative;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>
