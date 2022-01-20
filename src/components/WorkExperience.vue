<template>
    <v-card class='cardContainer' elevation='0'>
      <v-row>
        <v-col sm='3'>
          <v-img :src='require(`@/assets/${logo}`)' width='200px' class='mx-auto'/>
          <v-card-text class='mt-n5 year' align='center'>{{year}}</v-card-text>
        </v-col>
        <v-col cols='12' sm='8'>
          <v-card-title class='positionTitle'>{{jobTitle}}</v-card-title>
          <v-card-title class='companyTitle'>{{company}}</v-card-title>
          <ul class='ml-5'>
            <li v-for="item in descriptions" :key='item' class='descriptionList'>
              {{item}}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
export default {
  props: ['company', 'jobTitle', 'year', 'logo', 'descriptions'],
  data: ()=> {
    return {
    }
  }
}
</script>

<style scoped>
.cardContainer {
  margin-block: 75px;
  margin-inline: 5%;
  padding-right: 10px;
  padding-left: 10px;
}

.positionTitle{
  font-size: 4vw;
}

.companyTitle {
  font-weight: 500;
  font-size: 3vw;
}

.descriptionList {
  font-size: 1rem;
}

.year {
  position: relative;
  font-weight: bold;
  font-size: 1rem;
}
@media (max-width: 600px) {
  .positionTitle{
    font-size: 6vw;
  }
  .companyTitle {
    font-size: 5vw;
  }
  .year {
    font-size: 2rem;
  }
}
</style>