import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRxQXWAo9SPaeKQp3Q-4s5TYqyegjxu7U",
    authDomain: "fyvt-60dfa.firebaseapp.com",
    projectId: "fyvt-60dfa",
    storageBucket: "fyvt-60dfa.appspot.com",
    messagingSenderId: "437326109437",
    appId: "1:437326109437:web:2738f54b28ec8a65ef7c94",
    measurementId: "G-10Q6BGL591"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};