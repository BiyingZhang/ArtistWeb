<template>
    <div>
        <BackButton/>
        <h1>Intaglio Prints</h1>
        <div class="container">
            <Picture name="circuit1" description='Circuit Collection Arrangement 1, Etching, 10" x 10", 2017'/> 
            <Picture name="circuit2" description='Circuit Collection Arrangement 2, Etching, 10" x 10", 2017'/> 
            <Picture name="circuit3" description='Circuit Collection Arrangement 3, Etching, 10" x 10", 2017'/> 
            <Picture name="circuit4" description='Circuit Collection Arrangement 4, Etching, 10" x 10", 2017'/> 
            <Picture name="etching" description='Bad Apple, Etching, 3" x 3", 2017'/> 
        </div>
    </div>
</template>

<script>
import BackButton from '../components/BackButton.vue'
import Picture from '../components/Picture.vue'

export default {
  name: 'Etching',
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
</style>
