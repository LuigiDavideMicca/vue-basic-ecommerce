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
  apiKey: "###",
    authDomain: "#####",
    databaseURL: "#####",
    projectId: "########",
    storageBucket: "###############",
    messagingSenderId: "##########",
    appId: "##########"
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
