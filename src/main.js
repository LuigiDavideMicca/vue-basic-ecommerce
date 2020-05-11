import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import VueSwal from 'vue-swal';

Vue.use(VueSwal)


firebase.initializeApp({
  apiKey: "AIzaSyAZHoS_zDFzjq3N37_mQ7QBmMEJelUNnTA",
    authDomain: "lumen-mec-srl.firebaseapp.com",
    databaseURL: "https://lumen-mec-srl.firebaseio.com",
    projectId: "lumen-mec-srl",
    storageBucket: "lumen-mec-srl.appspot.com",
    messagingSenderId: "647791051243",
    appId: "1:647791051243:web:8b6be708f8f67280f0d9ae"
});

export const db = firebase.firestore()
export const auth = firebase.auth()


Vue.config.productionTip = false

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
      mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
    }).$mount('#app')    
  }
})