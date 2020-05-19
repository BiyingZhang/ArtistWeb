<template>
    <transition  appear enter-active-class="animate__animated animate__rollIn delay">
    <div class="pic" @click="showFull = !showFull">
        <img :src="url" />
        <p>{{description}}</p>
        <div v-if="showFull" class="page-container"> 
            <span class="page-container black-background"></span>
            <div class="full-pic"><img :src="url"/></div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'BackButton',
    props: {
        name: String,
        description: String
    },
    data() {
        return {
            showFull: false
        }
    },
    computed: {
        url() {
            return require('../assets/' + this.name + '.jpg')
        }
    }
}
</script>

<style scoped>
img {
  max-width: 95%;
  max-height: 95%;
}
.pic{
    width: 48%;
    padding-bottom: 8vh;
}
.delay{
    animation-delay: 0.8s;
}
.page-container{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.black-background{
    background-color: black;
    opacity: 0.8;
}
.full-pic{
    position: sticky;
    top: 0;
}
.full-pic  img {
    max-height: 100vh;
    max-width: 100vw;
}
</style>