<template>
  <v-main>
    <v-img
    src='../assets/Dark-office.jpg'
    height='250px'/>
    <h1 class='titleText white--text'>Resume</h1>
    <h1 align='center'>Top Software Skills</h1>
    <v-row class='skills' justify='center'>
      <v-col cols='12' sm='6' align='center' class='column'>
        <p>HTML, CSS, Javascript, Typescript</p>
        <p>Vue, Angular, React/React-Native</p>
        <p>SQL, Postgres</p>
        <p>Docker</p>
        <p>Agile Methodology</p>
      </v-col>
      <v-col cols='12' sm='6' align='center' class='column'>
        <p>Kubernetes</p>
        <p>Github</p>
        <p>RabbitMQ</p>
        <p>NodeJS</p>
        <p>C#, C++, Python</p>
      </v-col>
    </v-row>
    <hr>
    <WorkExperience 
      v-for="job in resumeJobs" :key='job.id'
      :company='job.company'
      :jobTitle="job.jobTitle"
      :year="job.year"
      :logo="job.logo"
      :descriptions="job.jobDescriptions"
      />
  </v-main>
</template>

<script>
import WorkExperience from '../components/WorkExperience.vue'
import jobs from '../assets/resumeInfo.json';

export default {
  name: 'App',
  components: {
    WorkExperience
  },
  data: ()=>{
    return {
      resumeJobs: jobs.experience
    }
  }
}
</script>

<style scoped>
.titleText {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
}

.skills {
  margin-inline: 5%;
  margin-block: 10px;
}

.column {
  padding: 0;
}
</style>