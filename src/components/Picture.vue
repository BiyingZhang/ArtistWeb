<template>
    <transition  appear enter-active-class="animate__animated animate__rollIn delay">
    <div class="pic">
        <img :src="url" />
        <p>{{description}}</p>
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
</style>