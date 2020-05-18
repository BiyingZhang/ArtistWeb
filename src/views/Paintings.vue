<template>
    <div>
        <h1>Paintings</h1>
        <div class="container">
            <div class="pic">
                <img src="../assets/painting1.jpg">
                <p>Chess Board, Oil on canvas, 24" x 24", 2018</p>
            </div>
            <div class="pic">
                <img src="../assets/painting2.jpg">
                <p>Drown, Oil on canvas, 24" x 24", 2018</p>
            </div>
            <div class="pic">
                <img src="../assets/acrylic1.jpg">
                <p>Stick Figure 1, Acrylic On Paper, 8" x 12", 2018</p>
            </div>
            <div class="pic">
                <img src="../assets/acrylic2.jpg">
                <p>Stick Figure 2, Acrylic On Paper, 8" x 12", 2018</p>
            </div>
            <div class="pic">
                <img src="../assets/painting3.jpg">
                <p>Odd Circuit, Oil on canvas, 18" x 24", 2018</p>
            </div>
            <div class="pic">
                <img src="../assets/painting4.jpg">
                <p>Wrap Me Up, Oil on canvas, tinsel foil fringe, 24" x 30", 2018</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Paintings'
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
    /* background-color: black ; */
    /* background-color: chocolate; */
}
.pic{
    width: 48%;
    padding-bottom: 8vh;
}
</style>
