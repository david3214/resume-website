<template>
<v-main>
  <v-img
    src='../../assets/CreativeProject/Sunset.jpg'
    height='250px'
    >
  </v-img>
  <h1 class="titleText white--text">
    Decoding Messages
  </h1>
  <v-btn
    to='/creative-project'
    color='secondary'
    class='rounded-xl my-3 ml-5'>
    &lt;- Back
  </v-btn>
  <v-row justify="center" align="center">
    <v-col class="ml-5">
      <p class="descriptionText">A study found that on average we tend to 
                                  decode messages in a negative light, and 
                                  have a hard time understanding the correct 
                                  meaning behind messages that our partner 
                                  send us.
      </p>
    </v-col>
    <v-col>
      <v-img
        src='../../assets/CreativeProject/Cartoon.svg'
        max-height='338px'
        max-width='566px'
        width='auto'
        height='auto'
        class='ml-5'
        ></v-img>
    </v-col>
    
  </v-row>
  
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

.descriptionText {
  font-size: clamp(1.1rem, 1.5vw, 2rem);
  font-weight: bold;
}
</style>
