import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDT_AwJK4qYI6dSRvcNdaCcWCAy4Ib6QOI",
    authDomain: "crwn-db-2e4c2.firebaseapp.com",
    databaseURL: "https://crwn-db-2e4c2.firebaseio.com",
    projectId: "crwn-db-2e4c2",
    storageBucket: "crwn-db-2e4c2.appspot.com",
    messagingSenderId: "959642894743",
    appId: "1:959642894743:web:45281d03ef3486982284d2",
    measurementId: "G-F3K16DZ0XW"
  }


  firebase.initializeApp(config);



  export const auth = firebase.auth(); // to use authentication anywhere we need it in the app
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider(); // Google authentication utility
  provider.setCustomParameters({ prompt: 'select_account' }); // We want to always trigger the google popup whenever we use the google auth provider for authentication and signin 
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  