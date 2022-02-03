<template>
  <v-main>
    <v-img
    src='../assets/office.jpeg'
    height='250px'/>
    <h1 class="titleText white--text">Contact</h1>
    <v-row class="my-3" align='center'>
        <v-col justify='start' align='center'>
          <h2 >How to find me</h2>
          <v-img class="picture" src="../assets/Sitting By Rocks.jpeg"/>
          <h3>Email</h3>
          <a href='mailto:davidw3214@gmail.com'>davidw3214@gmail.com</a>
        </v-col>
    </v-row>
  </v-main>
</template>

<style scoped>
.titleText {
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  font-size: clamp(3em, 7vw, 3.5em);
}

.picture {
  width: 400px;
}
</style>