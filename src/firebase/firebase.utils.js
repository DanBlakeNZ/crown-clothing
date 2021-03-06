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

// SETTING UP FIREBASE
// https://firebase.google.com/docs/firestore/quickstart#initialize

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider
// https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider#setcustomparameters
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // If User doesn't exist, add them to Firebase.
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user.");
    }
  }

  // Else user exists, return userRef;
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch(); // Batch add documents to firestore DB
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); //returns promise
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data(); // Use data method to get the data off the snapshot.

    return {
      routeName: encodeURI(title.toLowerCase()), // Encodes a string into a something that can be used by a URL.
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {}); // {} is the initial object
};

export default firebase;
