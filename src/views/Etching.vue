<template>
    <div>
        <h1>Intaglio Prints By Biying Zhang</h1>
        <div class="container">
            <div class="pic">
                <img src="../assets/etching.jpg">
                <p>Bad Apple, Etching, 3" x 3", 2017</p>
            </div>
            <div class="pic">
                <img src="../assets/circuit1.jpg">
                <p>Circuit Collection Arrangement 1, Etching, 10" x 10", 2017</p>
            </div>
            <div class="pic">
                <img src="../assets/circuit2.jpg">
                <p>Circuit Collection Arrangement 2, Etching, 10" x 10", 2017</p>
            </div>
            <div class="pic">
                <img src="../assets/circuit3.jpg">
                <p>Circuit Collection Arrangement 3, Etching, 10" x 10", 2017</p>
            </div>
            <div class="pic">
                <img src="../assets/circuit4.jpg">
                <p>Circuit Collection Arrangement 4, Etching, 10" x 10", 2017</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Etching'
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
    background-color: white;
    color: black;
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
.pic{
    width: 48%;
    padding-bottom: 4vh;
}
</style>
