<template>
<v-main>
  <v-img
    src='../../assets/CreativeProject/Sunset.jpg'
    height='250px'
    >
  </v-img>
  <h1 class="titleText white--text">
    Communication of Needs
  </h1>
  <v-btn
    to='/creative-project'
    color='secondary'
    class='rounded-xl my-3 ml-5'>
    &lt;- Back
  </v-btn>
  <v-row justify="center" align="center">
    <v-col class="mx-5" cols="6">
      <p class="descriptionText">
        The importance of our need and the mood of our partner 
        affects whether or not the we communicate our needs
      </p>
    </v-col>
    <v-col class="mx-auto d-none d-sm-flex">
        <v-img
          src='../../assets/CreativeProject/Graph.svg'
          max-height='400px'
          max-width='400px'
          width='auto'
          height='auto'
          class='mx-5'
          ></v-img>
    </v-col>
  </v-row>
  <v-img
    src='../../assets/CreativeProject/Graph.svg'
    max-height='400px'
    max-width='400px'
    width='auto'
    height='auto'
    class='mx-auto d-flex d-sm-none'
    ></v-img>
  
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

.descriptionText {
  font-size: clamp(1.1rem, 1.5vw, 2rem);
  font-weight: bold;
}
</style>
