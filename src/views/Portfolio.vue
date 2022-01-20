<template>
  <v-main>
    <v-img
    src='../assets/futuristic-office.jpeg'
    height='250px' 
    />
    <h1 class='titleText white--text'>Portfolio</h1>
    <v-card elevation="0">
      <v-row>
        <v-col>
          <h1 align="center">Page Interaction Manager</h1>
          <iframe
            class="video"
            :src="missionaryTools"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <v-card-text class='description'>Created and maintained a Google Sheets Add-on that connects with Facebook, to pull data so whenever someone likes a post or an ad, it would insert their profile link, and the link of the post/ad, into the connected google sheet. Modularized it to be used globally, and currently have over 150 different facebook pages using this add-on. Stored relevant data to connect the different services in a SQL database stored on Google Cloud. Deployed the project on Google Cloud using Kubernetes.</v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1 align="center">Contacts Updater</h1>
          <iframe
            class="video"
            :src="missionaryTools"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <v-card-text class="description">A Google Apps Script Library enabling contacts from one account to sync across hundreds of accounts with a given frequency. Done by creating a trigger, that runs every given time frame,  to export the contacts from one Google account into a Google sheet. It then creates a trigger for each user to import these contacts into their account. Dealt with duplicate contacts, updating instead of replacing old contacts, and staying under api limits. Created completely via Google Apps Script and Google Sheets.</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      missionaryTools: 'https://www.youtube.com/embed/Ond_B8z03W0',
      contactsUpdator: 'https://www.youtube.com/embed/Ond_B8z03W0'
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

.description {
  font-size: 1rem;
}

.v-card {
  margin: 0 10%;
}

.row {
  margin: 0;
}
.video {
  display: block;
  margin: 2% auto;
  width: 50vw; /* 16/9 aspect ration*/
  height: 28.125vw;
  min-width: 300px;
  min-height: 168.75px;
}
</style>