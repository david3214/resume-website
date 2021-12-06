<template>
  <v-app-bar
    app
    color="primary"
    dark
    class="align-center"
  >
    <v-spacer></v-spacer>
    <v-row class="align-center">
      <v-btn plain dark 
        v-for="directory in directories" 
        :key="directory">
        {{directory}}
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data: ()=>{
    return {
      directories: [
        "Resume",
        "Portfolio",
        "Contact"
      ]
    }
  }
}
</script>