<template>
  <v-app>
    
    <Header />
    <v-main>
      <HelloWorld/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer.vue'
import Header from './components/Header.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Footer,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
