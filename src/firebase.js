import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBP4KNGAQmv2XtlK7Tpq2dRe80cw153fkE",
    authDomain: "react-messenger-app-79c38.firebaseapp.com",
    projectId: "react-messenger-app-79c38",
    storageBucket: "react-messenger-app-79c38.appspot.com",
    messagingSenderId: "691314291635",
    appId: "1:691314291635:web:4e667d48e843055818d1c6",
    measurementId: "G-29XR85SGS7"
  });

  const db = firebaseApp.firestore();

  export default db