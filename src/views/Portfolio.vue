<template>
  <v-main>
    <v-img
    src='../assets/futuristic-office.jpeg'
    height='250px' 
    />
    <h1 class='titleText white--text'>Portfolio</h1>
    <v-card elevation="0">
      <h1 align="center" class='mt-2'>Page Interaction Manager</h1>
      <h3 align="center" class="priceDescription mt-n2 mb-n3">This project sold for $20,000</h3>
      <v-row align="center">
        <v-col>
          <v-img class='media' src='../assets/PIM.png' />
        </v-col>
        <v-col align="center">
          <v-btn
            href="https://www.youtube.com/watch?v=Ond_B8z03W0"
            target="_blank"
            class="githubButton"
            rounded
            text
          >
            <v-icon class='githubIcon' size="50px">
              mdi-youtube
            </v-icon>
            View on Youtube
          </v-btn>
          <v-btn
            href="https://github.com/david3214/Page-Interaction-Manager"
            target="_blank"
            class="githubButton"
            rounded
            text
          >
            <v-icon class='githubIcon' size="50px">
              mdi-github
            </v-icon>
            View on Github
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text class='description'>I created and maintained a Google Sheets Add-on that connects with Facebook, to pull data so whenever someone likes a post or an ad, it would insert their profile link, and the link of the post/ad, into the connected google sheet. Modularized it to be used globally, and before selling it I had over 150 different facebook pages using this add-on. Stored relevant data to connect the different services in a SQL database stored on Google Cloud. I deployed the project on Google Cloud using Kubernetes.</v-card-text>
      </v-row>
      <h1 align="center" class='mt-2'>Crossroads</h1>
      <v-row align="center">
        <v-col>
          <v-img class='media' src='../assets/Crossroads.jpeg' />
        </v-col>
        <v-col align="center">
          <v-btn
            href="https://www.wavetronix.com/crossroads"
            target="_blank"
            class="githubButton"
            rounded
            text
          >
            <v-img src="../assets/Wx.jpg" width='30px' class="mr-2"/>
            View Product
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text class='description'>
          During my tenure as a Computer Science Intern at Wavetronix, I played a pivotal role in the development and success of Crossroads, a global traffic simulation application. My contributions significantly shaped the refactoring of a complex legacy codebase, thereby enhancing the overall functionality and user-centric design of the application. I spearheaded the design and implementation of several major features, including the pioneering Corridor Simulation module, further diversifying the application's capabilities. My work received both internal recognition and external appreciation, with the project being showcased at trade shows and gaining interest from educational institutions worldwide.
        </v-card-text>
      </v-row>
      <h1 align="center">Contacts Updater</h1>
      <v-row align="center">
        <v-col>
          <v-img class='media' src='../assets/ContactUpdater.png' />
        </v-col>
        <v-col align="center">
          <v-btn
            class="githubButton"
            rounded
            text
            href="https://github.com/walkwithchrist/contacts-updater"
            target="_blank"
          >
            <v-icon class='githubIcon' size="50px">
              mdi-github
            </v-icon>
            View on Github
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text class="description">A Google Apps Script Library enabling contacts from one account to sync across hundreds of accounts with a given frequency. Done by creating a trigger, that runs every given time frame,  to export the contacts from one Google account into a Google sheet. It then creates a trigger for each user to import these contacts into their account. Dealt with duplicate contacts, updating instead of replacing old contacts, and staying under api limits. Created completely via Google Apps Script and Google Sheets.</v-card-text>
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
  top: 140px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  font-size: clamp(3em, 7vw, 3.5em);
}

.githubButton {
  height: 50px !important;;
}

.githubIcon{
  margin-right: 10px;
}

h1 {
  font-size: clamp(1.5em, 5vw, 3.5em)
}

.description {
  font-size: clamp(1.1rem, 1.5vw, 2rem);
  line-height: 30px;
  font-weight: 300;
}

.v-card {
  margin: 0 10%;
}

.row {
  margin: 0;
}
.media {
  display: block;
  margin: 2% auto;
  width: 50vw; /* 16/9 aspect ration*/
  height: 28.125vw;
  min-width: 300px;
  min-height: 168.75px;
}

.priceDescription {
  font-style: italic;
  font-size: clamp(1em, 2vw, 2em);
}
</style>