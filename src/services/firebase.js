import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDs6-NrDB9GpjBswHpl46FfjWUOl3ASomY",
    authDomain: "armstrongsoftwarehome.firebaseapp.com",
    databaseURL: "https://armstrongsoftwarehome.firebaseio.com",
    projectId: "armstrongsoftwarehome",
    storageBucket: "armstrongsoftwarehome.appspot.com",
    messagingSenderId: "158641605151",
    appId: "1:158641605151:web:a1b161b7146108f418e32a",
    measurementId: "G-N95J0HND6M"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth;
export const db = firebase.database();