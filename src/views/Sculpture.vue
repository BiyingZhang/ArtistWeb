<template>
    <div>
        <h1>Sculptures By Biying Zhang</h1>
        <div class="container">
            <div class="pic">
                <img src="../assets/discoball1.jpg">
                <p>Disco Balls, Plaster, 3" x 3", 2020</p>
            </div>
            <div class="pic">
                <img src="../assets/discoball2.jpg">
                <p>Disco Balls, Plaster, 3" x 3", 2020</p>
            </div>
            <div class="pic">
                <img src="../assets/box1.jpg">
                <p>Yun, CNC Cut Wood Board, 14" x 14", 2017</p>
            </div>
            <div class="pic">
                <img src="../assets/box2.jpg">
                <p>Yun, CNC Cut Wood Board, 14" x 14", 2017</p>
            </div>
            <div class="pic">
                <img src="../assets/box3.jpg">
                <p>Yun, CNC Cut Wood Board, 14" x 14", 2017</p>
            </div>
            <div class="pic">
                <img src="../assets/wood1.jpg">
                <p>Wood Arrangement 1, Wood Utensils, 2020</p>
            </div>
            <div class="pic">
                <img src="../assets/wood2.jpg">
                <p>Wood Arrangement 2, Wood Utensils, 2020</p>
            </div>
            <div class="pic">
                <img src="../assets/wood3.jpg">
                <p>Wood Arrangement 3, Wood Utensils, 2020</p>
            </div>
            <div class="pic">
                <img src="../assets/wood4.jpg">
                <p>Wood Arrangement 4, Wood Utensils, 2020</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sculpture'
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
