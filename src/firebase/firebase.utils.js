import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCNu4TrpQRKRX4mAkawoH5JQA6WDhA8Wo0",
  authDomain: "crown-db-b9b10.firebaseapp.com",
  databaseURL: "https://crown-db-b9b10.firebaseio.com",
  projectId: "crown-db-b9b10",
  storageBucket: "crown-db-b9b10.appspot.com",
  messagingSenderId: "711647984686",
  appId: "1:711647984686:web:6ab09f54fcd53651dc73bf",
  measurementId: "G-5Z17T3N5M3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider
const provider = new firebase.auth.GoogleAuthProvider();

// https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
