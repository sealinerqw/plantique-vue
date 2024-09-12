import './assets/css/normalized.css'
import './assets/css/global.css'
import './assets/css/font-style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vClickOutside from 'click-outside-vue3'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz_a2kdtzI30CiGIUi6A_UuFYIPJ_ue1M",
  authDomain: "plantique-d9608.firebaseapp.com",
  databaseURL: "https://plantique-d9608-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plantique-d9608",
  storageBucket: "plantique-d9608.appspot.com",
  messagingSenderId: "443637039320",
  appId: "1:443637039320:web:4207604f9640cb16ac57ad",
  measurementId: "G-ZWFNT2K9MQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);
export const auth = getAuth()
export default firebaseApp
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vClickOutside)

app.mount('#app')
