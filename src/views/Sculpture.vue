<template>
    <transition leave-active-class="animate__animated animate__fadeOut">
        <div>
            <BackButton/>
            <transition appear enter-active-class="animate__animated animate__fadeIn delay">
                <h1>Sculptures</h1>
            </transition>
            <div class="container">
                <Picture name="discoball1" description='Disco Balls, Plaster, 3" x 3", 2020'/> 
                <Picture name="discoball2" description='Disco Balls, Plaster, 3" x 3", 2020'/> 
                <Picture name="box1" description='Yun, CNC Cut Wood Board, 14" x 14", 2017'/> 
                <Picture name="box2" description='Yun, CNC Cut Wood Board, 14" x 14", 2017'/> 
                <Picture name="box3" description='Yun, CNC Cut Wood Board, 14" x 14", 2017'/> 
                <Picture name="wood1" description='Wood Arrangement 1, Wood Utensils, 2020'/> 
                <Picture name="wood2" description='Wood Arrangement 2, Wood Utensils, 2020'/> 
                <Picture name="wood3" description='Wood Arrangement 3, Wood Utensils, 2020'/> 
                <Picture name="wood4" description='Wood Arrangement 4, Wood Utensils, 2020'/> 
            </div>
        </div>
    </transition>
</template>

<script>
import BackButton from '../components/BackButton.vue'
import Picture from '../components/Picture.vue'
export default {
  name: 'Sculpture',
  components: {
      BackButton, Picture
  }
}
</script>

<style scoped>
p{
    margin: 5px;
}
h1{
    text-align: left;
    margin-left: 5vw;
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
.delay{
    animation-delay: 0.8s;
}
</style>
