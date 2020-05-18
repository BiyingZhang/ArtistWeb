<template>
    <div class="about">
        <h1>Everything You Need to Know About Biying Zhang</h1>
        
        <div class="container">
            <div class="intro">
                <router-link to="/">home</router-link>
                <p>{{info_p1}}</p>
                <p>{{info_p2}}</p>
                <p>{{info_p3}}</p>
                <p>{{info_p4}}</p>
                <p>{{info_p5}}</p>
            </div>
            <div class="pic">
                <img src="../assets/Biying.png">
            </div>
            
        </div>


        <!-- Q & A part click to see answer -->
    </div>
</template>

<script>
export default {
  name: 'About',
  data() {
		return {
            info_p1: "Biying (pronounced bee-yeen) Zhang is a mixed media artist who currently lives in Pittsburgh, PA. She grew up in Beijing, China and moved to the U.S. when she was 15.",
            info_p2: "Biying went to the University of Pittsburgh in Pittsburgh, PA. She was a proud duo-degree student in Computer Science and Studio Arts with a minor in Japanese.",
            info_p3: "She is always fascinated by colors and shapes growing up and she discovered her interest in digital art by p*rating Adobe Photoshop and Corel Painter at the age of 14.",
            info_p4: "Biying makes art that represents her understanding in science while trying to find a balance between the scientific and the artworld. She makes art by playing with colors and transforming geometric shapes and grids. Oil paint, digital tools, and whatever she finds in herapartment is her most-practiced mediums. Biying aims at bring her audience visualfeasts and full-on experiences like touching a sculpture.",
            info_p5: "Biying loves making art."
		}
	},
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
 .about{
    margin: 5vh 10vw;
    text-align: left;
}
.container{
    display:flex;
    justify-content: space-between;
    max-height: 80vh;
    
}
.intro{
    max-width: 45%;
    margin-right: 10px;
}
.pic{
    max-height: 100%;
}
</style>
