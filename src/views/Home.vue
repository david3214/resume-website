<template>
<v-main>
  <v-img
    src='../assets/Side Desk.jpg'
    height='400px'
    >
  </v-img>
  <h1 class="title white--text">
    Software Developer
  </h1>
  <h4 class="description white--text">
    Self motivated, with excellent skills — can hit the ground running. Seeking part-time position while completing schooling
  </h4>
  <PictureQuote 
    src="Side Desk.jpg" 
    :leftImg='true' 
    description='Description' 
    title='My Work Experience'
    btnText="Learn More"
    destination='/resume'/>
  <PictureQuote 
    src="Top Desk.jpg" 
    :leftImg='false' 
    description='Check out my projects' 
    title='My Projects'
    btnText='View Portfolio'
    destination='/portfolio'
    />
    <v-row class='quoteRow'>
      <v-col cols='12' sm='6'>
        <h2>"Some Quote about my work ethic etc, need to ask Jerome for something"</h2>
        <p>- Jerome Broekhuijsen, Team Lead at Security Metrics</p>
      </v-col>
      <v-col cols='12' sm='6'>
        <h2>"Some Quote about my work ethic etc, need to ask Dave for something"</h2>
        <p>- Dave Welch, CEO at Hexly</p>
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
.title {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
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
