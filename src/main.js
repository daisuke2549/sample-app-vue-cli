import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyBCn-f6Zyf3nkInd5iwx1xsZXSGSdqnpqo",
  authDomain: "sample-app-vue-cli.firebaseapp.com",
  projectId: "sample-app-vue-cli",
  storageBucket: "sample-app-vue-cli.appspot.com",
  messagingSenderId: "262254707985",
  appId: "1:262254707985:web:751d377f76f1c1a277b8b0",
  measurementId: "G-3EC4FJ95YK"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
