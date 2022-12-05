<template>
<v-main>
  <v-img
    src='../../assets/CreativeProject/Sunset.jpg'
    height='250px'
    >
  </v-img>
  <h1 class="titleText white--text">
    Marital Communication
  </h1>
  <v-row class="mt-10" justify="center">
    <v-btn 
      to='/decoding-messages'
      color='secondary'
      class='rounded-xl mb-2'>
      Decoding Messages
    </v-btn>
  </v-row>
  <v-row justify="center" align='center' md="1">
    <v-btn 
      to='/communication-of-needs'
      color='secondary'
      class='rounded-xl mb-2 mx-auto'>
      Communication of Needs
    </v-btn>
    <v-img 
      src='../../assets/CreativeProject/CoupleImage.jpg'
      height='300px' max-width="300px" class="hidden-sm-and-down">
    </v-img>
    <v-btn 
      to='/communication-impact'
      color='secondary'
      class='rounded-xl mb-2 mx-auto'>
      Impact of Communication
    </v-btn>
  </v-row>
  <v-img 
    src='../../assets/CreativeProject/CoupleImage.jpg'
    height='300px' max-width="300px" class="hidden-md-and-up mt-2 mx-auto">
  </v-img>
</v-main>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.titleText {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  font-size: clamp(2.2em, 7vw, 3.5em);
  text-align: center;
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
