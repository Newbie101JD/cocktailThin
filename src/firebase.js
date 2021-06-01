import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnB9oOWdGjnFpIf52dpZec_nTq0dP-Mcw",
    authDomain: "cocktail-site-fa5d8.firebaseapp.com",
    projectId: "cocktail-site-fa5d8",
    storageBucket: "cocktail-site-fa5d8.appspot.com",
    messagingSenderId: "992395468955",
    appId: "1:992395468955:web:62c70828d13c5239dae63e",
    measurementId: "G-NL9VFD2W78"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  
const db = firebaseApp.firestore();
const auth= firebase.auth();



export {db, auth};