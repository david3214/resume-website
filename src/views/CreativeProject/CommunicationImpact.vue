<template>
<v-main>
  <v-img
    src='../../assets/CreativeProject/Sunset.jpg'
    height='250px'
    >
  </v-img>
  <h1 class="titleText white--text">
    Impact of Communication
  </h1>
  <v-btn
    to='/creative-project'
    color='secondary'
    class='rounded-xl  my-3 ml-5'>
    &lt;- Back
  </v-btn>
  <v-row class="mx-5" justify="center" align="center">
    <v-col>
      <p class="descriptionText">
        A study had hypothesised that <b>the amount of marital communication that
        occurred had a correlation with marital satisfaction.</b>
        In this study, they found that couples who were more
        satisfied communicated more than those who were dissatisfied. <br/>
        It specifically noted that <b>conversations about the couple's sexual relationship,
        vacation, and home life impacted the couple in a positive way</b>. 
      </p>
      <v-img
        src='../../assets/CreativeProject/CoupleInCar.svg'
        max-height='400px'
        max-width='400px'
        width='auto'
        height='auto'
        class='ml-5  d-flex d-sm-none'
        ></v-img>
      <v-img
        src='../../assets/CreativeProject/Marital Satisfaction.svg'
        max-height='400px'
        max-width='300px'
        width='auto'
        height='auto'
        class='ml-5 mb-5  d-flex d-sm-none'
        ></v-img>
    </v-col>
    <v-col class="d-none d-sm-flex">
      <v-img
        src='../../assets/CreativeProject/CoupleInCar.svg'
        max-height='400px'
        max-width='400px'
        width='auto'
        height='auto'
        class='ml-5'
        ></v-img>
    </v-col>
    <v-col class="d-none d-sm-flex">
      <v-img
        src='../../assets/CreativeProject/Marital Satisfaction.svg'
        max-height='400px'
        max-width='300px'
        width='auto'
        height='auto'
        class='ml-5 mb-5'
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

.descriptionText {
  font-size: clamp(.9rem, 1.25vw, 1.8rem);
}
</style>
