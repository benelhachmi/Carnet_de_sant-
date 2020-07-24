import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBndcmbo7D5MjeAnQM-c9TrwU-U-0SnxU4",
    authDomain: "gamezone1-4b851.firebaseapp.com",
    databaseURL: "https://gamezone1-4b851.firebaseio.com",
    projectId: "gamezone1-4b851",
    storageBucket: "gamezone1-4b851.appspot.com",
    messagingSenderId: "33736263881",
    appId: "1:33736263881:web:0a4b99730c81d8bf3ae518",
    measurementId: "G-S6WTT7GZ8G"
  };
// Initialize Firebase
if(! firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  
  }
  
export default firebase;