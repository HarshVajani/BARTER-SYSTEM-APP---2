import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyChojbno_vkQztFO-nw3Zo8RMD3Usog4lQ",
    authDomain: "wily-app-a4160.firebaseapp.com",
    projectId: "wily-app-a4160",
    storageBucket: "wily-app-a4160.appspot.com",
    messagingSenderId: "501919968778",
    appId: "1:501919968778:web:e8ee32454d40d66092f9f3"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();