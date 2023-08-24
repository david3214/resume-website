import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import CreativeProject from '../views/CreativeProject/CreativeProject.vue'
import CommunicationImpact from '../views/CreativeProject/CommunicationImpact.vue'
import DecodingMessages from '../views/CreativeProject/DecodingMessages.vue'
import CommunicationOfNeeds from '../views/CreativeProject/CommunicationOfNeeds.vue'
import Resume from '../views/Resume.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicy
  },
  {
    path: '/creative-project',
    name: 'Creative Project',
    component: CreativeProject
  },
  {
    path: '/decoding-messages',
    name: 'Decoding Messages',
    component: DecodingMessages
  },
  {
    path: '/communication-of-needs',
    name: 'Communication of Needs',
    component: CommunicationOfNeeds
  },
  {
    path: '/communication-impact',
    name: 'Communication Impact',
    component: CommunicationImpact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
  routes
})

export default router
