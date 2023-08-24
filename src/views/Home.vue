<template>
<v-main>
  <v-img
    src='../assets/Side Desk.jpg'
    height='400px'
    >
  </v-img>
  <h1 class="titleText white--text">
    Software Developer
  </h1>
  <h4 class="description white--text">
    Self motivated, with excellent skills — can hit the ground running.
  </h4>
  <PictureQuote 
    src="dev-photo.jpeg" 
    :leftImg='true' 
    description='Previously worked in roles such as a Full-Stack Developer, Backend Developer, WPF C# developer, and more.' 
    title="David's 4+ Years of Experience"
    btnText="Learn More"
    destination='/resume'/>
  <PictureQuote 
    src="Top Desk.jpg" 
    :leftImg='false' 
    description='With a variety of projects using tools ranging from Kubernetes on Google Cloud to a WPF Traffic Simulation project, view the projects that have refined my skills.' 
    title='My Projects'
    btnText='View Portfolio'
    destination='/portfolio'
    />
    <v-row v-if='false' class='quoteRow'>
      <v-col cols='12' sm='6'>
        <h2>"Some Quote about my work ethic, skills, etc, need to ask Dave for something"</h2>
        <p>- Brad Giles, Product Manager at Wavetronix</p>
      </v-col>
      <v-col cols='12' sm='6'>
        <h2>"Some Quote about my work ethic, skills, etc, need to ask Jerome for something"</h2>
        <p>- Jerome Broekhuijsen, Development Manager at Security Metrics</p>
      </v-col>
    </v-row>
</v-main>
</template>

<script>
import PictureQuote from '../components/PictureQuote.vue'
export default {
  name: 'App',
  components: {
    PictureQuote
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.titleText {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  font-size: clamp(2.2em, 6vw, 3.5em);
}

.description {
  position: absolute;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  max-width: 600px;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
}

.quoteRow {
  margin-inline: 5%;
  margin-bottom: 10px;
}
</style>
