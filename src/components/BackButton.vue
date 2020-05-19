<template>
  <div id="backButton">
      <router-link to="/"><font-awesome-icon icon="chevron-circle-left" size="lg"/></router-link>
  </div>
</template>

<script>
export default {
    name: 'BackButton'
}
</script>

<style scoped>
#backButton{
    position:fixed;
    left: 10px;
    bottom: 10px;
    opacity: 0.2;
    z-index: 1;
}
</style>